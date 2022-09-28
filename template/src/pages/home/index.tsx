import { Text } from 'react-native'

import useDefaultStatusBar from '@/hooks/useDefaultStatusBar'

const Home: React.FC = () => {
  useDefaultStatusBar()

  return <Text>Home</Text>
}

export default Home
