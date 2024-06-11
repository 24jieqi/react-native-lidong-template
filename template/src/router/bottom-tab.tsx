import {
  HomeOutline,
  IdentificationOutline,
  MenuOutline,
} from '@fruits-chain/icons-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'

import Home from '@/pages/home'
import User from '@/pages/user'

import {
  sceneContainerStyle,
  noHeaderShadowStyle,
  defaultHeaderTintColor,
} from './config'
import { DrawerContextProvider, DrawerPopup, useDrawerContext } from './drawer'

export type BottomTabParamList = {
  Home: undefined
  User: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()
const screenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    // 去掉阴影
    ...noHeaderShadowStyle,
  },
  headerTitleAlign: 'center',
  headerTintColor: defaultHeaderTintColor,
}

const HomeMenuIcon = ({ tintColor }: { tintColor?: string }) => {
  const { open } = useDrawerContext()
  return (
    <View
      style={{
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MenuOutline onPress={open} color={tintColor} />
    </View>
  )
}

const BottomTab: React.FC = () => {
  return (
    <DrawerContextProvider>
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={sceneContainerStyle}
        screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ color, size }) => (
              <HomeOutline size={size} color={color} />
            ),
            headerLeft: HomeMenuIcon,
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            title: '',
            tabBarLabel: '我的',
            tabBarIcon: ({ color, size }) => (
              <IdentificationOutline size={size} color={color} />
            ),
            headerTransparent: true,
            headerLeft: HomeMenuIcon,
          }}
        />
      </Tab.Navigator>

      <DrawerPopup />
    </DrawerContextProvider>
  )
}

export default BottomTab
