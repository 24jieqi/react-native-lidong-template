import { CardStyleInterpolators } from '@react-navigation/stack'

import Login from '@/pages/login'
import type { IRouteConfig } from '@/router/typing'

export type LoginStackParamList = {
  LOGIN: undefined
}

type LoginStackName = keyof LoginStackParamList

const routes: IRouteConfig<LoginStackName>[] = [
  {
    name: 'LOGIN',
    component: Login,
    options: {
      title: '登录',
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    },
  },
]

export default routes
