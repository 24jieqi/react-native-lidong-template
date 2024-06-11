import { ArrowLeftOutline } from '@fruits-chain/icons-react-native'
import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

interface BackArrowProps extends TouchableOpacityProps {
  /**
   * 图标颜色
   */
  iconColor?: string
}

/**
 * 导航栏左上角返回按钮
 * @description 添加一个反馈高亮
 * @description TODO 修复 使用 memo 包裹后，`src/router/config.tsx` 里面报错的问题
 */
const BackArrow: React.FC<BackArrowProps> = ({
  iconColor = '#333',
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...restProps}
      activeOpacity={restProps.activeOpacity || 0.2}>
      <View style={Styles.back}>
        <ArrowLeftOutline color={iconColor} />
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  back: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BackArrow
