import { Button } from '@fruits-chain/react-native-xiaoshu'
import React, { Component, useEffect } from 'react'
import { Alert, StatusBar, Platform, Text, View, Image } from 'react-native'
import ReactNativeExceptionHandler from 'react-native-exception-handler'
import VersionNumber from 'react-native-version-number'

import graphqlClient from '@/graphql/client'
import type {
  InsertAppExceptionMutation,
  InsertAppExceptionMutationVariables,
} from '@/graphql/operations/__generated__/common.generated'
import { InsertAppExceptionDocument } from '@/graphql/operations/__generated__/common.generated'
import EStyleSheet from '@/lib/react-native-extended-stylesheet'
import useUser from '@/stores/user'

import IMAGE_ERROR from './images/default_error.png'

interface ErrorRouterInfo {
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
}

const { setJSExceptionHandler, setNativeExceptionHandler } =
  ReactNativeExceptionHandler

/** 发生错误时的路由信息 */
let errorRouterInfo: ErrorRouterInfo = {}

/** 设置\记录出错路由信息 */
export const setErrorRouterInfo = (e: ErrorRouterInfo) => {
  errorRouterInfo = e
}

const DefaultStatusBar = () => {
  useEffect(() => {
    const entry = StatusBar.pushStackEntry({
      barStyle: 'dark-content',
      translucent: true,
    })
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
    return () => {
      StatusBar.popStackEntry(entry)
    }
  }, [])

  return null
}

/**
 * 上报错误
 * @param error 错误信息
 * @param isNative 是否是原生端错误
 * @param info 其他额外附带的
 */
const reporter = (error: Error, isNative: boolean, info?: string) => {
  if (!__DEV__) {
    graphqlClient.mutate<
      InsertAppExceptionMutation,
      InsertAppExceptionMutationVariables
    >({
      mutation: InsertAppExceptionDocument,
      variables: {
        appExceptionDTO: {
          appId: 2,
          platform: Platform.OS,
          version: VersionNumber.buildVersion,
          systemVersion: `${Platform.Version}`,
          exceptionType: isNative ? 1 : 2,
          message: JSON.stringify({
            isNative,
            name: error.name,
            message: error.message,
            more: info || '',
            phoneNum: useUser.getState().userInfo?.phoneNum,
            router: errorRouterInfo,
          }),
        },
      },
    })

    // 上报后清空路由信息
    errorRouterInfo = {}
  }
}

export const initExceptionHandler = () => {
  // JavaScript 相关错误
  setJSExceptionHandler((e, isFatal) => {
    if (isFatal) {
      reporter(e, false)

      // 如果整个应用都没有加载上，所以这里用 React Native 提供的 Alert
      Alert.alert(
        '未知错误',
        `错误: ${isFatal ? '【*】' : ''}${e.name} ${e.message}`,
        [
          {
            text: '确定',
          },
        ],
      )
    } else {
      // console.log(e) // So that we can see it in the ADB logs in case of Android if needed
    }
  })

  // 原生端相关错误
  setNativeExceptionHandler(errorString => {
    reporter(new Error(errorString), true)
  })
}

/***
 * React 边界错误组件
 * @description 把当前组件放置根组件内、路由组件外，点击返回首页就重新把路由组件渲染
 */
export class ErrorBoundary extends Component<React.PropsWithChildren<{}>> {
  public static getDerivedStateFromError(error: Error) {
    // 更新 state，下次渲染可以展示错误相关的 UI
    return { error }
  }

  public state: { error: Error } = {
    error: null,
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    // 错误上报
    reporter(error, true, JSON.stringify(info))
  }

  /**
   * 点击清空错误，重新渲染子组件
   */
  public onPressBack = () => {
    this.setState({
      error: null,
    })
  }

  public render() {
    if (this.state.error) {
      // 渲染出错时的 UI
      return (
        <View style={STYLES.page}>
          <DefaultStatusBar />

          <Image source={IMAGE_ERROR} />

          <Text style={STYLES.text}>页面错误，请稍后再试</Text>

          <Text style={STYLES.text}>{this.state.error.name}</Text>

          <Text style={STYLES.text}>{this.state.error.message}</Text>

          <Button style={STYLES.btn} onPress={this.onPressBack}>
            返回首页
          </Button>
        </View>
      )
    }
    return this.props.children
  }
}

const STYLES = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '$gray_6',
    lineHeight: 22,
    fontSize: '$font_size_2',
    paddingVertical: '$space_2',
    marginHorizontal: '$space_4',
    textAlign: 'center',
  },

  btn: {
    paddingHorizontal: '$space_6',
    marginTop: '$space_4',
  },
})
