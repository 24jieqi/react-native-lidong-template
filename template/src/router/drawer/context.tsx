import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface DrawerContextState {
  visible: boolean
  open: () => void
  close: () => void
}

const DrawerContext = createContext<DrawerContextState>({
  visible: true,
  open: () => {},
  close: () => {},
})

export const useDrawerContext = () => useContext(DrawerContext)

export const DrawerContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false)

  const open = useCallback(() => {
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
  }, [])

  const value = useMemo<DrawerContextState>(
    () => ({ visible, open, close }),
    [close, open, visible],
  )

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  )
}
