import type { StackNavigationOptions } from '@react-navigation/stack'
import { Platform } from 'react-native'

// import BackArrow from '@/components/back-arrow'
import EStyleSheet from '@/lib/react-native-extended-stylesheet'

/** 没有头部阴影 */
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
    // 固定高度 丢失沉浸方案
    // height: EStyleSheet.value('$header_height'),
    // 边框
    borderBottomWidth: 1,
    borderBottomColor: EStyleSheet.value('$gray_1'),
    borderStyle: 'solid',
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: EStyleSheet.value('$font_size_7'),
    lineHeight: 24,
    color: EStyleSheet.value('$gray_8'),
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
  // headerLeft: props => BackArrow(props),
}

/**
 * 主题色
 */
export const primaryStackRouteOptions: StackNavigationOptions = {
  headerStyle: {
    // 去掉阴影
    ...noHeaderShadowStyle,
    backgroundColor: EStyleSheet.value('$brand_6'),
  },
  headerTitleStyle: {
    color: '#fff',
  },
  // headerLeft: props => {
  //   return BackArrow({
  //     ...props,
  //     iconColor: '#fff',
  //   })
  // },
}
