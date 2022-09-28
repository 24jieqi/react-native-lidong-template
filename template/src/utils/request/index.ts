import { Toast } from '@fruits-chain/react-native-xiaoshu'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import systemConfig from '@/config'
import useHostStore from '@/stores/host'

import { handleNoCommonError, handleUnAuthError } from './error-handle'
import MSG_LIST from './message'

export type RequestOptions = AxiosRequestConfig & {
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any
}
const { baseUrl, authKey } = systemConfig
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // TODO fix it
    const result: { errCode: number; errMsg: string; data: unknown } =
      response.data
    // 图片上传简易判断
    if (!result.errCode) {
      return response
    }
    // 错误并提示
    if (result.errCode !== 200) {
      const errText = `${result.errMsg}`
      Toast({
        message: errText,
        duration: 2500,
      })
      return Promise.reject(errText)
    }
    return response
  },
  error => {
    const { response } = error
    // 请求有响应
    if (response) {
      const { status, data, config } = response
      data.message = data.errMsg || MSG_LIST.unknownError
      if (status === 401) {
        // 状态码为401时，根据白名单来判断跳转与否
        handleUnAuthError(config.url, data.message)
        return Promise.reject(new Error(data.message))
      }
      // 404 502 ..
      handleNoCommonError(data.message)
      return Promise.reject(data.message)
      // throw message;
    }
    // 请求超时
    if (error.code === 'ECONNABORTED') {
      const timeoutMsg = MSG_LIST.timeout
      handleNoCommonError(timeoutMsg)
      return Promise.reject(timeoutMsg)
    }
    handleNoCommonError(MSG_LIST.network)
    return Promise.reject(MSG_LIST.network)
  },
)
// TODO: 添加options 类型interface
export default async function request<T>(options: RequestOptions) {
  const { url } = options
  const opt: RequestOptions = options
  delete opt.url
  const hasUpdate = url.indexOf('https') === -1 && url.indexOf('http') === -1 // 判断是否APP版本升级的接口
  const hasApi = url.indexOf('api') === -1 && hasUpdate // true => no
  const Authorization = await AsyncStorage.getItem(authKey)
  let headers = {}
  if (options) {
    headers = options.headers || {}
  }
  const defaultOptions = {
    headers: {
      [authKey]: Authorization ? Authorization : null,
      appversioncode: 3,
      ...headers,
    },
    credentials: 'include',
    timeout: 10000,
    withCredentials: true,
    validateStatus(status: number) {
      return status >= 200 && status < 300 // default
    },
  }
  if (options) {
    delete options.headers
  }
  const newOptions: RequestOptions = { ...defaultOptions, ...options }
  newOptions.data = newOptions.body
  delete newOptions.body
  const newUrl = hasApi ? baseUrl + url : url
  const newHost = hasUpdate ? useHostStore.getState().host : ''
  return axios
    .request<T>({
      ...newOptions,
      url: newHost + newUrl,
    })
    .then(data => data.data)
}
