import { DraftsOutline, SwapOutline } from '@fruits-chain/icons-react-native'
import { Popup } from '@fruits-chain/react-native-xiaoshu'
import { useNavigation } from '@react-navigation/native'
import { memo } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import type { HomeTabScreenProps } from '../types'

import { useDrawerContext } from './context'

type ScreenProps = HomeTabScreenProps<'Home'>

const DrawerPopup = () => {
  const { visible, close } = useDrawerContext()
  const navigation = useNavigation<ScreenProps['navigation']>()
  return (
    <Popup
      visible={visible}
      position="left"
      onPressOverlay={close}
      safeAreaInsetBottom
      safeAreaInsetTop>
      <View style={styles.popup}>
        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            navigation.navigate('List')
            close()
          }}>
          <DraftsOutline size={24} color="#3D3D3D" />
          <Text style={styles.cellText}>自定义跳转</Text>
        </TouchableOpacity>

        <View style={styles.placeholder} />

        <TouchableOpacity
          style={styles.cell}
          onPress={() => {
            // TODO 退出登录
            // eslint-disable-next-line no-console
            console.log('退出登录')
          }}>
          <SwapOutline size={24} color="#3D3D3D" />
          <Text style={styles.cellText}>退出登录</Text>
        </TouchableOpacity>
      </View>
    </Popup>
  )
}

const styles = StyleSheet.create({
  popup: {
    width: 200,
    paddingVertical: 40,
    flex: 1,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  cellText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    marginLeft: 8,
  },
  placeholder: {
    flex: 1,
  },
})

export default memo(DrawerPopup)
