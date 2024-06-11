import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import type { StatusBarStyle } from 'react-native'
import { Platform, StatusBar } from 'react-native'

const useStatusBar = (barStyle: StatusBarStyle, translucent: boolean) => {
  useFocusEffect(
    useCallback(() => {
      const entry = StatusBar.pushStackEntry({ barStyle, translucent })
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
      return () => {
        StatusBar.popStackEntry(entry)
      }
    }, [barStyle, translucent]),
  )
}

export default useStatusBar
