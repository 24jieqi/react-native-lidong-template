import { Button, Space } from '@fruits-chain/react-native-xiaoshu'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

import useNavigationResume from '@/hooks/useNavigationResume'
import useStatusBar from '@/hooks/useStatusBar'
import type { RootStackScreenProps } from '@/router/types'

type ListScreenProps = RootStackScreenProps<'List'>

const List = () => {
  useStatusBar('dark-content', true)

  const navigation = useNavigation<ListScreenProps['navigation']>()

  useNavigationResume(() => {
    // 从详情页返回后刷新列表数据
    console.log('useNavigationResume')
  })

  return (
    <Space>
      <Text>List Page</Text>
      <Text>List Page</Text>

      <Button
        onPress={() => {
          navigation.navigate('Detail', {
            id: '123',
          })
        }}>
        Go detail
      </Button>
    </Space>
  )
}

export default List
