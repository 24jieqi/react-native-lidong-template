import { Platform } from 'react-native'

import config from '@/config'
import request from '@/utils/request'

interface ResponseData<T> {
  errCode: number
  errMsg: string
  data: T
}

const DeviceMap: Record<string, number> = {
  ios: 2,
  android: 1,
}

const buildURL = (p: string) => `${config.COMMON_HOST}${p}`

export interface AppVersion {
  appleId: string
  downloadUrl: string
  platform: number
  updateInfo: string
  upgradeStrategy: number
  version: number
  versionCode: string
}

export const getAppVersion = () => {
  return request<ResponseData<AppVersion>>({
    url: buildURL(`/api/app/version/${DeviceMap[Platform.OS] ?? 0}/${config.appId}`),
  })
}
