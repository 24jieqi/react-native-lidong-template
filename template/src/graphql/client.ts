import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { removeMockDirectivesFromDocument } from '@fruits-chain/qiufen-helpers'
import { Dialog, Toast } from '@fruits-chain/react-native-xiaoshu'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { parse } from 'graphql'
import debounce from 'lodash/debounce'
import { Platform } from 'react-native'
import VersionNumber from 'react-native-version-number'

import { emitRefetchUpdateVersion } from '@/components/update-version'
import config from '@/config'
import { navigate } from '@/router/root-navigation'
import useHostStore from '@/stores/host'
import { omitDeepLodash } from '@/utils/deep-omit'

import { port } from '../../qiufen.config'

const platform = Platform.OS

const toastError = (msg: string) => {
  Toast({
    message: msg,
    duration: 1500,
  })
}

// 错误提示
const errorTip = debounce(toastError, 500)
let confirmIsVisible = false

const doEmitRefetchUpdateVersion = debounce(emitRefetchUpdateVersion, 500)

const httpLink = new HttpLink({
  // uri: `${useHostStore.getState().host}${config.baseUrl}graphql`,
})

const withToken = setContext(async () => {
  const token = await AsyncStorage.getItem(config.authKey)
  return {
    token,
    uri: `${useHostStore.getState().host}${config.baseUrl}graphql`,
  }
})

// 请求处理
const authMiddleware = new ApolloLink((operation, forward) => {
  const { token, uri } = operation.getContext()
  operation.setContext(({ headers = {} }) => {
    if (token) {
      Object.assign(headers, { Authorization: token })
    }

    Object.assign(headers, {
      'app-version': VersionNumber.buildVersion,
      appversioncode: VersionNumber.buildVersion,
      platform,
    })

    return {
      headers,
    }
  })
  // 过滤掉数据中的__typename
  operation.variables = omitDeepLodash(operation?.variables, ['__typename'])
  // 过滤掉mock指令
  if (uri !== `http://localhost:${port}/graphql`) {
    operation.query = parse(removeMockDirectivesFromDocument(operation.query))
  }

  return forward(operation)
})

// 响应处理
const responseMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const errResponse = response as {
      errCode: number
      errMsg: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: Record<string, any>
    }
    if (errResponse.errCode === 500) {
      errorTip(errResponse.errMsg || '服务器异常')
    }
    return response
  })
})

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, extensions, path }) => {
      // eslint-disable-next-line no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )

      if (extensions) {
        const { message: errMsg, code } = extensions

        if (code === '401') {
          navigate('LOGIN')
        } else {
          if (code === '450') {
            // 需要更新应用
            doEmitRefetchUpdateVersion()
          }

          errorTip((errMsg as string) || message || '请求异常')
        }
      }
    })
  }

  if (networkError) {
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${networkError.stack}`)
    if (!confirmIsVisible) {
      confirmIsVisible = true
      Dialog({
        title: '提示',
        message: '网络开了小差，请稍后再试',
      }).finally(() => {
        confirmIsVisible = false
      })
    }
  }
})

const link = ApolloLink.from([withToken, concat(authMiddleware, httpLink)])

export default new ApolloClient({
  link: concat(errorMiddleware, concat(responseMiddleware, link)),
  cache: new InMemoryCache({}),
  defaultOptions: {
    // 禁用缓存
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})
