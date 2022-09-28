import AsyncStorage from '@react-native-async-storage/async-storage'

import config from '@/config'
import * as RootNavigation from '@/router/root-navigation'
import { LOGIN_PATH } from '@/router/stack/login'
import Toast from '@/utils/toast'

import WhiteList from './allow-list'
import MSG_LIST from './message'

const { authKey } = config

const ToastError = (msg: string) => {
  Toast.info({
    content: msg,
    duration: 1500,
  })
}

const errorCode = {
  err401: 401, // 需要认证（登录）
  err403: 403, // 认证用户权限不足
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleNoCommonError(err: any) {
  if (!err) {
    // Toast.info(MSG_LIST.unknownError, 1.5)
    ToastError(MSG_LIST.unknownError)
  } else if (
    err.errorItems &&
    err.errorItems.length > 0 &&
    err.errorItems[0].message
  ) {
    // Toast.info(err.errorItems[0].message, 1.5)
    ToastError(err.errorItems[0].message)
  } else if (err.message) {
    // Toast.info(err.message, 1.5)
    ToastError(err.message)
  } else {
    // Toast.info(err, 1.5)
    ToastError(err)
  }
}

// function handleCommonError(err, config) {
//   const { code } = err
//   switch (code) {
//     case errorCode.err401: {
//       remove(authKey)
//       Toast.info(MSG_LIST.loginout, 1)
//       // 在不是react组件内路由跳转
//       RootNavigation.navigate(LOGIN)
//       break
//     }
//     default: {
//       if (!config.noErrorTip) {
//         handleNoCommonError(err)
//       }
//     }
//   }
// }

function handleUnAuthError(url: string, errorMessage = MSG_LIST.loginout) {
  // 这个path是完整的url
  if (!url) {
    return
  }
  // 去除host和query params
  const path = url.replace(config.HOST, '').replace(/\?.*/, '')
  // Toast.info(errorMessage, 1.5)

  ToastError(errorMessage)

  if (!WhiteList.includes(path)) {
    AsyncStorage.removeItem(authKey)
    RootNavigation.navigate(LOGIN_PATH)
  }
}

export { handleNoCommonError, errorCode, handleUnAuthError }
