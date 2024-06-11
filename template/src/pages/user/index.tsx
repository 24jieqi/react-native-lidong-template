import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import useDifferentState from '@/hooks/useDifferentState'
import useStatusBar from '@/hooks/useStatusBar'
import { defaultHeaderTintColor } from '@/router/config'
import type { HomeTabScreenProps } from '@/router/types'

import UserTop from './top'

type HomeScreenProps = HomeTabScreenProps<'User'>

const User = () => {
  const [showHeader, setShowHeader] = useDifferentState(false)

  useStatusBar(showHeader ? 'dark-content' : 'light-content', true)

  const navigation = useNavigation<HomeScreenProps['navigation']>()
  const headerHeight = useHeaderHeight()

  useLayoutEffect(() => {
    if (showHeader) {
      navigation.setOptions({
        headerTransparent: true,
        headerTintColor: defaultHeaderTintColor,
        headerBackground: () => (
          <View style={{ backgroundColor: '#fff', height: headerHeight }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                overflow: 'hidden',
                marginRight: 12,
              }}
              source={{ uri: 'https://dummyimage.com/120x120/000/fff' }}
              resizeMode="cover"
            />

            <Text>某某人</Text>
          </View>
        ),
      })
    } else {
      navigation.setOptions({
        headerTransparent: true,
        headerTintColor: '#fff',
        headerBackground: () => null,
        headerTitle: () => null,
      })
    }
  }, [headerHeight, navigation, showHeader])

  return (
    <ScrollView
      onScroll={e => {
        setShowHeader(e.nativeEvent.contentOffset.y >= 200)
      }}>
      <UserTop uri="https://img.yzcdn.cn/vant/cat.jpeg" />

      <View style={{ height: headerHeight }} />

      <View style={{ height: 200 }}>
        <Text style={{ color: '#fff' }}>User Page</Text>
      </View>

      <View style={{ height: 400, backgroundColor: '#876' }} />

      <View style={{ height: 400, backgroundColor: '#765' }} />
      <View style={{ height: 400, backgroundColor: '#654' }} />
      <View style={{ height: 400, backgroundColor: '#543' }} />
      <Text>User Page</Text>
    </ScrollView>
  )
}

export default User
