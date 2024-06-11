import { memo } from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface UserTopProps {
  uri: string
}

const UserTop: React.FC<UserTopProps> = ({ uri }) => {
  return (
    <View style={styles.box}>
      <View style={styles.cover} />
      <Image style={styles.img} source={{ uri }} resizeMode="cover" />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
  cover: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },
  img: {
    width: '100%',
    height: '100%',
  },
})

export default memo(UserTop)
