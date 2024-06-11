import type { NavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'

import type { RootStackParamList } from './types'

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>()

/**
 * 在非组件环境环境下使用
 */
export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  // TODO fix type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigationRef.current?.navigate(name as any, params)
}
