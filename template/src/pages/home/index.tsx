import { ArrowDownFill } from '@fruits-chain/icons-react-native'
import { Toast } from '@fruits-chain/react-native-xiaoshu'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import useDefaultStatusBar from '@/hooks/useDefaultStatusBar'

const Home: React.FC = () => {
  useDefaultStatusBar()

  const insets = useSafeAreaInsets()

  return (
    <>
      <View style={{ height: insets.top }} />
      <Text>Home</Text>
      <ArrowDownFill
        color="#098"
        onPress={() => {
          Toast('你点击了我')
        }}
      />
    </>
  )
}

export default Home
