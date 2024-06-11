import { Space, Button } from '@fruits-chain/react-native-xiaoshu'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

import useStatusBar from '@/hooks/useStatusBar'
import type { HomeTabScreenProps } from '@/router/types'

type HomeScreenProps = HomeTabScreenProps<'Home'>

const Home = () => {
  useStatusBar('dark-content', true)

  const navigation = useNavigation<HomeScreenProps['navigation']>()

  return (
    <Space>
      <Text>Home Page</Text>

      <Button
        onPress={() => {
          navigation.navigate('List')
        }}>
        Go list
      </Button>
    </Space>
  )
}

export default Home
