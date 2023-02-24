import AsyncStorage from '@react-native-async-storage/async-storage'
import RNConfig from 'react-native-config'
import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface HostState {
  host: string
  login: string
  updateHost: (h: string) => void
  updateLogin: (l: string) => void
}

export const name = 'host-store'

const baseStateCreator: StateCreator<HostState> = set => ({
  host: RNConfig.HOST,
  login: RNConfig.LOGIN_HOST,
  updateHost: (h: string) => {
    set({
      host: h,
    })
  },
  updateLogin: l => {
    set({
      login: l,
    })
  },
})

const hostGlobalStore = create(
  devtools<HostState>(
    RNConfig.CUSTOMIZE_HOST
      ? (persist<HostState>(baseStateCreator, {
          name,
          getStorage: () => AsyncStorage,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any)
      : baseStateCreator,
  ),
)

export default hostGlobalStore
