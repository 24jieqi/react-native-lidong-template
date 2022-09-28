import { cloneElement } from 'react'
import { ScrollView, Text, Platform } from 'react-native'

// @ts-ignore
ScrollView.defaultProps = {
  // @ts-ignore
  ...ScrollView.defaultProps,
  /**
   * 决定滚动条距离视图边缘的坐标。这个值应该和 contentInset 一样。默认值为 {0, 0, 0, 0}。
   */ scrollIndicatorInsets: { right: 1 },
  /**
   * 用户拖拽滚动视图的时候，是否要隐藏软键盘。
   * @param 'none' （默认值），拖拽时不隐藏软键盘。
   * @param 'on-drag' 当拖拽开始的时候隐藏软键盘。
   * @description 似乎在 Android 没得作用，参考：https://github.com/facebook/react-native/issues/23364#issuecomment-530005723
   */
  keyboardDismissMode: 'on-drag',
}

// @ts-ignore
Text.defaultProps = { ...Text.defaultProps, allowFontScaling: false }

const defaultFontFamily = {
  ...Platform.select({
    android: { fontFamily: '' },
  }),
}

// @ts-ignore
const oldRender = Text.render

// @ts-ignore
Text.render = function (...args) {
  const origin = oldRender.call(this, ...args)
  return cloneElement(origin, {
    style: [defaultFontFamily, origin.props.style],
  })
}
