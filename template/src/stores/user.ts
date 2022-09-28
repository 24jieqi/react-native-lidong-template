import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import config from '@/config'
import client from '@/graphql/client'
import type { UserInfoQuery } from '@/graphql/operations/__generated__/user.generated'
import { UserInfoDocument } from '@/graphql/operations/__generated__/user.generated'
import type { PermissionsData } from '@/middle-services/auth-restful'
import {
  refreshToken,
  listOrg,
  listUserPower,
} from '@/middle-services/auth-restful'

type OptionItem = { value?: number; label?: string }
export interface UserState {
  /** 用户信息 */
  userInfo: {
    /** 用户名 */
    name: string
    /** 手机号 */
    phoneNum: string
    /** 岗位 */
    positionName: string[]
    /** 分公司 */
    organizationName: string
    /** 用户id */
    userId: number
  }
  /** 用户权限 */
  permissions: PermissionsData[]
  /** 保存用户细信息 */
  saveUserInfo: (userInfo: UserState['userInfo']) => void
  /** 获取用户信息 */
  getUserInfo: () => Promise<boolean>
  /** 清空用户信息 */
  clearUserInfo: () => void
  /** 用户分配的分拣仓/组织 */
  orgOptions: OptionItem[]
  /** 更新/设置户分配的分拣仓/组织 */
  setOrgOptions: (p: OptionItem[]) => void
}

const createUserInfo = (): UserState['userInfo'] => ({
  name: null,
  phoneNum: null,
  positionName: [],
  organizationName: null,
  userId: null,
})

export const name = 'user-store'

const useGlobalStore = create(
  devtools<UserState>((set, get) => ({
    userInfo: createUserInfo(),
    permissions: [],
    saveUserInfo(payload) {
      set({ userInfo: payload })
    },
    getUserInfo() {
      // 检测是否有 token
      return AsyncStorage.getItem(config.authKey)
        .then(data => {
          if (data) {
            return Promise.all([
              client.query<UserInfoQuery>({
                query: UserInfoDocument,
              }),
              listUserPower(),
            ])
          }
          return Promise.reject(new Error('未登录'))
        })
        .then(async ([resp, { data: permissions }]) => {
          // 请求用户信息顺便刷新新的 token，为避免后面的请求使用以前的token，这里 await 等刷新过后再请求
          await refreshToken().then(({ data }) => {
            return AsyncStorage.setItem(config.authKey, data || '')
          })

          const userInfo = resp?.data?.loginUserInfo

          get().saveUserInfo({
            name: userInfo?.userName,
            phoneNum: userInfo?.userPhoneNum,
            organizationName: userInfo?.organizationName,
            positionName:
              userInfo?.positions?.map(item => item.positionName) || [],
            userId: userInfo?.userId,
          })

          useGlobalStore.setState({
            permissions: permissions,
          })

          return listOrg()
        })
        .then(({ data }) => {
          get().setOrgOptions(
            data.map(d => ({
              value: d.orgId,
              label: d.orgName,
            })),
          )

          return true
        })
        .catch(() => {
          return Promise.resolve(false)
        })
    },
    clearUserInfo() {
      set({
        userInfo: createUserInfo(),
        permissions: [],
      })
    },
    orgOptions: [],
    setOrgOptions(p) {
      set({
        orgOptions: p,
      })
    },
  })),
)

export default useGlobalStore
