import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type {
  StackScreenProps,
  StackNavigationOptions,
} from '@react-navigation/stack'
import type React from 'react'

import type { BottomTabParamList } from './bottom-tab'
import type { StackParamList } from './stack'

export interface IRouteConfig<T = string> {
  name: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>
  options: StackNavigationOptions
}

export type RootStackParamList = {
  HOME: NavigatorScreenParams<BottomTabParamList>
  AUTH: undefined
} & StackParamList

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
