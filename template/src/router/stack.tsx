/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton } from '@fruits-chain/react-native-xiaoshu'
import type { StackNavigationOptions } from '@react-navigation/stack'
import type { LazyExoticComponent } from 'react'
import { Suspense, lazy } from 'react'

import useStatusBar from '@/hooks/useStatusBar'

interface IRouteConfig<T = string> {
  name: T
  component: React.ComponentType<any>
  options?: StackNavigationOptions
}

const SuspenseLoading = () => {
  useStatusBar('dark-content', true)

  return <Skeleton loading />
}

const buildRouteSuspense =
  (LazyRoute: LazyExoticComponent<any>): React.ComponentType<unknown> =>
  (props: any) => {
    return (
      <Suspense fallback={<SuspenseLoading />}>
        <LazyRoute {...props} />
      </Suspense>
    )
  }

const Login = buildRouteSuspense(lazy(() => import('@/pages/login')))
const List = buildRouteSuspense(lazy(() => import('@/pages/list')))
const Detail = buildRouteSuspense(lazy(() => import('@/pages/detail')))

export type StackRouterParamsList = {
  /** 登录 */
  Login: undefined
  /** 列表 */
  List: undefined
  /** 详情页 */
  Detail: {
    id: string
  }
}

export type StackRouter = keyof StackRouterParamsList

export const routes: IRouteConfig<StackRouter>[] = [
  {
    name: 'Login',
    component: Login,
    options: {
      title: '登录',
    },
  },
  {
    name: 'List',
    component: List,
    options: {
      title: '列表',
    },
  },
  {
    name: 'Detail',
    component: Detail,
    options: {
      title: '详情',
    },
  },
]
