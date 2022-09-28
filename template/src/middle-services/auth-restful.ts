import { Toast } from '@fruits-chain/react-native-xiaoshu'

import config from '@/config'
import useHostStore from '@/stores/host'
import type { RequestOptions } from '@/utils/request'
import request from '@/utils/request'

interface ResponseData<T> {
  code: number
  message: string
  data: T
}

const buildURL = (p: string) => `${useHostStore.getState().login}${p}`

/** 自定义请求，上传图片返回的格式与授权不太一样，只好各自分开玩 */
const customRequest = async <T>(o: RequestOptions) => {
  const { headers, ...restOption } = o
  const data = await request<T>({
    ...restOption,
    headers: {
      middleversioncode: 15,
      ...headers,
    },
  })
  const { code, message } = data as unknown as ResponseData<unknown>

  if (code === 200) {
    return data
  }

  Toast(message)

  throw message
}

export const sendCodeMsg = (body: { phone: string }) =>
  customRequest({
    url: buildURL('/auth/sendCodeMsg'),
    method: 'POST',
    body,
  })

export const loginByMsgCodeOnApp = (body: { code: string; phone: string }) =>
  customRequest<ResponseData<string>>({
    url: buildURL('/auth/loginByMsgCodeOnApp'),
    method: 'POST',
    body,
  })

export const loginByAccountOnApp = (body: {
  password: string
  userAccount: string
}) =>
  customRequest<ResponseData<string>>({
    url: buildURL('/auth/loginByAccountOnApp'),
    method: 'POST',
    body,
  })

export const getUserAllInfo = () =>
  customRequest<
    ResponseData<{
      needUpdatePassword: boolean
      tenantInfos: { tenantId: number }[]
    }>
  >({
    url: buildURL('/auth/getUserAllInfo'),
    method: 'POST',
  })

export const chooseTenant = (body: { tenantId: number }) =>
  customRequest<ResponseData<unknown>>({
    url: buildURL('/auth/chooseTenant'),
    method: 'POST',
    body,
  })

export const listOrg = () =>
  customRequest<ResponseData<{ orgId: number; orgName: string }[]>>({
    url: buildURL('/auth/listOrg'),
    method: 'POST',
    body: {
      appId: config.appId,
    },
  })

export const chooseOrg = (body: { orgId: number }) =>
  customRequest<ResponseData<unknown>>({
    url: buildURL('/auth/chooseOrg'),
    method: 'POST',
    body,
  })

export const refreshToken = () =>
  customRequest<ResponseData<string>>({
    url: buildURL('/auth/refreshToken'),
    method: 'POST',
  })

export type PermissionsData = {
  powerCode: string
  powerId: number
  powerName: string
}

export const listUserPower = () =>
  customRequest<ResponseData<PermissionsData[]>>({
    url: buildURL('/auth/listUserPower'),
    method: 'POST',
    body: {
      appId: config.appId,
    },
  })

export const updatePassword = (body: {
  newPassword: string
  oldPassword: string
}) =>
  customRequest<ResponseData<unknown>>({
    url: buildURL('/auth/updatePassword'),
    method: 'POST',
    body,
  })

export const resetPassword = (
  body: {
    password: string
  },
  options: Omit<RequestOptions, 'url' | 'method' | 'body'> = {},
) => {
  return customRequest<ResponseData<unknown>>({
    url: buildURL('/auth/restPassword'),
    method: 'POST',
    body,
    ...options,
  })
}
