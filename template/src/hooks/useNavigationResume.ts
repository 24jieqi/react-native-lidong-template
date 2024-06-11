import { useIsFocused } from '@react-navigation/native'
import { useMemoizedFn } from 'ahooks'
import { useEffect, useRef } from 'react'

/**
 * 导航/路由/页面再次激活或离开后回来时触发
 */
const useNavigationResume = (callback: () => void) => {
  const isFocused = useIsFocused()
  const mounted = useRef(false)
  const callbackPersistFn = useMemoizedFn(callback)

  useEffect(() => {
    if (mounted.current && isFocused) {
      callbackPersistFn()
    }
  }, [isFocused, callbackPersistFn])

  useEffect(() => {
    mounted.current = true
  }, [])
}

export default useNavigationResume
