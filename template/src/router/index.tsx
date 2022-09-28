import type { NavigationContainerProps } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import { setErrorRouterInfo } from '@/components/error-boundary'

import { defaultStackRouteOptions } from './config'
import { navigationRef } from './root-navigation'
import { RootStackParamList } from './typing'

export type { RootStackScreenProps, RootStackParamList } from './typing'

const Stack = createStackNavigator<RootStackParamList>()

const Router: React.FC = () => {
  const onStateChange: NavigationContainerProps['onStateChange'] = useCallback(
    state => {
      const { routes } = state
      const router = routes[routes.length - 1]
      setErrorRouterInfo(router)
    },
    [],
  )

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
        <Stack.Navigator>
          <Stack.Screen
            name="HOME"
            component={undefined}
            options={{ headerShown: false }}
          />
          {[].map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{ ...defaultStackRouteOptions, ...route.options }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Router