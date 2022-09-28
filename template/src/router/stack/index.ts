import type { IRouteConfig } from '@/router/typing'

import type { LoginStackParamList } from './login'
import Login from './login'

export type StackParamList = LoginStackParamList

export type StackName = keyof StackParamList

const stackRoutes: IRouteConfig<StackName>[] = [...Login]

export default stackRoutes
