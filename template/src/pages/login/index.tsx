import { Text } from 'react-native'

import useStatusBar from '@/hooks/useStatusBar'

const Login = () => {
  useStatusBar('dark-content', true)

  return (
    <>
      <Text>Login Page</Text>
      <Text>Login Page</Text>
    </>
  )
}

export default Login
