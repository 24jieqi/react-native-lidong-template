import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'

import type { BottomTabParamList } from './bottom-tab'
import type { StackRouterParamsList } from './stack'

/** 当前所有 Stack 路由的参数 */
export type RootStackParamList = {
  Index: NavigatorScreenParams<BottomTabParamList>
} & StackRouterParamsList

/** Stack 路由的 props */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >
