import React, { useEffect, useMemo, useState } from 'react'
import { DeviceEventEmitter } from 'react-native'

import config from '@/config'
import { getAppVersion } from '@/middle-services/api-restful'
import type { AppVersion } from '@/middle-services/api-restful'

import UpdateVersionRenderer from './render'

// 区分客户端版本
const { appleId } = config

const UpdateVersionEventEmitter = DeviceEventEmitter

const UPDATE_VERSION_REFETCH_EVENT_NAME = '__refetch__'

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

    // refetch
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
