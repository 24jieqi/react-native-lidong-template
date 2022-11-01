import { Overlay } from '@fruits-chain/react-native-xiaoshu'
import throttle from 'lodash/throttle'
import React, { useEffect, useState, useCallback, memo } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import VersionNumber from 'react-native-version-number'
import UpdateVersion from 'rn-update-version'

import type { AppVersion } from '@/middle-services/api-restful'

import Imgs from './images'

interface IProps {
  version: AppVersion
  /**
   * 必填 appleId
   */
  appleId?: string | number
}

/** 版本号 */
const currentVersion = VersionNumber.buildVersion

const UpdateVersionRenderer: React.FC<IProps> = ({ version, appleId }) => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('发现新版本')
  const [btnText, setBtnText] = useState('立即更新')
  const iOS = Platform.OS === 'ios'
  const promote = version.upgradeStrategy || 1

  const hideModal = useCallback(() => {
    setVisible(false)
    setLoading(false)
  }, [])

  const onBackdropPress = useCallback(() => {
    if (promote !== 2) {
      hideModal()
    }

    return true
  }, [hideModal, promote])

  const update = useCallback(() => {
    if (iOS) {
      UpdateVersion.update({ appleId: `${appleId}` })
    } else {
      setLoading(true)
      UpdateVersion.update({ url: version.downloadUrl })
    }
  }, [appleId, iOS, version.downloadUrl])

  useEffect(() => {
    /** 需要升级 */
    const versionNeedUpdate =
      +currentVersion < (version.version || 1) && promote !== 0

    if (versionNeedUpdate) {
      setVisible(true)
    }
  }, [promote, version])

  useEffect(() => {
    const remove = UpdateVersion.listen(
      throttle(payload => {
        setTitle('升级中...')
        setBtnText(`${payload.percent}%...`)
      }, 100),
      () => {
        setLoading(false)
        setTitle('下载失败')
        setBtnText('重新下载')
      },
    )
    return remove
  }, [])

  return (
    <Overlay
      visible={visible}
      style={styles.overlay}
      onRequestClose={onBackdropPress}>
      <View style={styles.container}>
        <Image source={Imgs.bg} style={styles.bg} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={[styles.version, iOS ? null : styles.versionAlone]}>
            {`为了不影响使用，${iOS ? '请参照以下步骤更新' : '请立即更新'}`}
          </Text>

          {iOS ? (
            <Text style={styles.updateStepText}>
              {`1. 删除星桥生产 App\n2. 打开 App Store，进入「个人中心」\n3. 点击「已购项目」，下载最新星桥生产 App`}
            </Text>
          ) : null}

          {iOS ? null : (
            <TouchableOpacity
              disabled={loading}
              style={[styles.btn, styles.flexCenter]}
              onPress={update}>
              <View style={styles.flexCenter}>
                {loading ? (
                  <ActivityIndicator
                    color="#fff"
                    style={styles.indicator}
                    animating
                    size="small"
                  />
                ) : null}

                <Text style={styles.btnTxt}>{btnText}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        {promote === 1 ? (
          <TouchableOpacity style={styles.close} onPress={hideModal}>
            <Image source={Imgs.closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </Overlay>
  )
}

export default memo(UpdateVersionRenderer)

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    left: -30,
  },
  bg: {
    width: 292,
    height: 101,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 1,
    paddingBottom: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 292,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 18,
    color: '#161617',
    fontWeight: 'bold',
    marginTop: 13,
    lineHeight: 25,
  },
  version: {
    fontSize: 15,
    color: '#5d626b',
    marginTop: 11,
    lineHeight: 22,
  },
  versionAlone: {
    marginBottom: 24,
  },
  updateStepText: {
    fontSize: 14,
    color: '#5d626b',
    marginTop: 8,
    lineHeight: 20,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#0065fe',
    borderRadius: 4,
  },
  btnTxt: {
    lineHeight: 40,
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  close: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  closeIcon: {
    width: 26,
    height: 26,
  },
})
