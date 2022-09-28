import type { NavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'

import type { RootStackParamList } from './typing'

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>()

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  // TODO fix type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigationRef.current?.navigate(name as any, params)
}
