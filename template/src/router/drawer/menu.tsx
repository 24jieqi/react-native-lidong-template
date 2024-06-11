import { MenuOutline } from '@fruits-chain/icons-react-native'
import { memo } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { useDrawerContext } from './context'
interface DrawerMenuIProps {
  color?: string
}
const DrawerMenu: React.FC<DrawerMenuIProps> = ({ color = '#333' }) => {
  const { open } = useDrawerContext()

  return (
    <TouchableOpacity onPress={open} activeOpacity={0.2}>
      <View style={Styles.menu}>
        <MenuOutline color={color} size={20} />
      </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  menu: {
    width: 24,
    height: 24,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default memo(DrawerMenu)
