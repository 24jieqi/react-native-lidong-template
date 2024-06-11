import { Space } from '@fruits-chain/react-native-xiaoshu'
import { useRoute } from '@react-navigation/core'
import { Text } from 'react-native'

import useStatusBar from '@/hooks/useStatusBar'
import type { RootStackScreenProps } from '@/router/types'

type DetailScreenProps = RootStackScreenProps<'Detail'>

const Detail = () => {
  useStatusBar('dark-content', true)

  const router = useRoute<DetailScreenProps['route']>()

  return (
    <Space>
      <Text>Detail {router.params.id}</Text>
      <Text>Detail Page</Text>
    </Space>
  )
}

export default Detail
