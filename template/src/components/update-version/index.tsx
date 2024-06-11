import React, { useEffect, useMemo, useState } from 'react'
import { DeviceEventEmitter } from 'react-native'

import config from '@/config'

import type { AppVersion } from './interface'
import UpdateVersionRenderer from './render'

const getAppVersion = async () => {
  const data: AppVersion = {
    appleId: '',
    downloadUrl: '',
    platform: 0,
    updateInfo: '',
    upgradeStrategy: 0,
    version: 0,
    versionCode: '',
  }

  return {
    data,
  }
}

// 区分客户端版本
const { appleId } = config

const UpdateVersionEventEmitter = DeviceEventEmitter

const UPDATE_VERSION_REFETCH_EVENT_NAME = '__refetch__'

/**
 * 在网络中遇见提醒升级就触发该函数
 */
export const emitRefetchUpdateVersion = () => {
  UpdateVersionEventEmitter.emit(UPDATE_VERSION_REFETCH_EVENT_NAME)
}

const UpdateVersion: React.FC = () => {
  const [appVersion, setAppVersion] = useState<AppVersion | null>(null)

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const version = useMemo(() => appVersion || ({} as AppVersion), [appVersion])

  useEffect(() => {
    const refetch = () => {
      getAppVersion().then(({ data }) => {
        setAppVersion(data)
      })
    }

    refetch()

    // 兼容使用过程中升级提醒
    const listener = UpdateVersionEventEmitter.addListener(
      UPDATE_VERSION_REFETCH_EVENT_NAME,
      () => {
        refetch()
      },
    )

    return () => {
      listener.remove()
    }
  }, [])

  return <UpdateVersionRenderer version={version} appleId={appleId} />
}

export default UpdateVersion
