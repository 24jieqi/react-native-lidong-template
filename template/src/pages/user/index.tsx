import { Text } from 'react-native'

import useDefaultStatusBar from '@/hooks/useDefaultStatusBar'

const User: React.FC = () => {
  useDefaultStatusBar()

  return <Text>User</Text>
}

export default User
