import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { memo } from 'react'

import Home from '@/pages/home'
import User from '@/pages/user'

export type BottomTabParamList = {
  HOME_HOME: undefined
  MINE: undefined
}

const Tabs = createBottomTabNavigator<BottomTabParamList>()

const BottomTab: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HOME_HOME"
        component={Home}
        options={{ title: '工作台', headerShown: false }}
      />
      <Tabs.Screen
        name="MINE"
        component={User}
        options={{ title: '我的', headerShown: false }}
      />
    </Tabs.Navigator>
  )
}

export default memo(BottomTab)
