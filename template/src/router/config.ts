import type { StackNavigationOptions } from '@react-navigation/stack'
import { type ViewStyle, type TextStyle, Platform } from 'react-native'

import BackArrow from '@/components/back-arrow'

export const defaultHeaderTintColor = '#11151A'

export const sceneContainerStyle: ViewStyle = {
  backgroundColor: '#EDEFF2',
}

export const buildHeaderTitleStyle = (p?: TextStyle): TextStyle => {
  return {
    fontSize: 18,
    lineHeight: 24,
    // color: '#11151A',
    fontWeight: 'bold',
    ...p,
  }
}

export const noHeaderShadowStyle = Platform.select({
  android: {
    elevation: 0,
  },
  ios: {
    borderBottomWidth: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
})

export const defaultStackRouteOptions: StackNavigationOptions = {
  headerStyle: {
    // 去掉阴影
    ...noHeaderShadowStyle,
    // 边框
    borderBottomWidth: 0,
    // borderBottomColor: '#098',
    // borderStyle: 'solid',
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    color: defaultHeaderTintColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // headerBackTitleVisible: false,
  headerLeft: props => BackArrow(props),
}
