import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { hide } from 'react-native-bootsplash'

import BottomTab from './bottom-tab'
import {
  buildHeaderTitleStyle,
  sceneContainerStyle,
  defaultStackRouteOptions,
} from './config'
import { navigationRef } from './root-navigation'
import { routes } from './stack'
import type { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()

const NestingNavigators: React.FC = () => {
  const isLogin = true
  const initialRouteName: keyof RootStackParamList = isLogin ? 'Index' : 'Login'

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        // 在路由初始化好的时候隐藏启动页
        hide()
      }}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          cardStyle: sceneContainerStyle,
          headerTitleAlign: 'center',
          headerTitleStyle: buildHeaderTitleStyle(),
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Index"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />

        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              ...defaultStackRouteOptions,
              ...route.options,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestingNavigators
