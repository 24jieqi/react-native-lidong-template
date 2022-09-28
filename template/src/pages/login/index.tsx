import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

import useStatusBar from '@/hooks/useStatusBar'
import type { RootStackScreenProps } from '@/router/typing'

import CustomizeHost from './customize-host'

const Login: React.FC = () => {
  useStatusBar('light-content', true)

  const navigation =
    useNavigation<RootStackScreenProps<'LOGIN'>['navigation']>()

  return (
    <>
      <CustomizeHost text="全果链生产" />
      <Text>登录页</Text>
      <Text
        onPress={() => {
          navigation.navigate('HOME')
        }}>
        去首页
      </Text>
    </>
  )
}

export default Login
