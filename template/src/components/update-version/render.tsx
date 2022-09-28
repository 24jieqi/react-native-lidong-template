import React, { useEffect, useState, useCallback, memo } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  NativeModules,
  DeviceEventEmitter,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import Modal from 'react-native-modal'
import VersionNumber from 'react-native-version-number'

import type { AppVersion } from '@/middle-services/api-restful'

import Imgs from './images'

interface IProps {
  version: AppVersion

  // /**
  //  * 最新的内部版本号
  //  * @description 主要对比这个版本提示更新，打包的版本
  //  */
  // version?: string | number

  // /**
  //  * 最新的外部版本号
  //  * @description 产品版本，目前 UI 上暂时未体现
  //  */
  // versionCode?: string

  // /**
  //  * 升级内容信息 '1、支持第三方平台业务|2、展示第三方平台订单取单编码'
  //  * @deprecated 目前 UI 上暂时未体现
  //  */
  // updateInfo?: string

  // /**
  //  * 更新方式(1升级，0不升级，2强制升级)
  //  */
  // promote?: number

  // /**
  //  * 安卓下载地址
  //  */
  // downloadUrl?: string

  /**
   * 必填 appleId
   */
  appleId?: string | number
}

const { RNUpdateVersionModule } = NativeModules

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
  }, [hideModal, promote])

  const update = useCallback(() => {
    if (iOS) {
      RNUpdateVersionModule.update(`${appleId}`)
    } else {
      setLoading(true)
      RNUpdateVersionModule.update(version.downloadUrl)
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
    // 监听下载进度
    const downloadEvent = DeviceEventEmitter.addListener(
      'DownloadApkProgress',
      arg => {
        const { percent, error, done } = arg
        if (error) {
          setLoading(false)
          setTitle('下载失败')
          setBtnText('重新下载')
          return
        }
        if (done) {
          setLoading(false)
          setTitle('升级成功')
          setBtnText('重新升级')
          return
        }
        setTitle('升级中...')
        setBtnText(`${percent}%...`)
      },
    )
    return () => {
      downloadEvent.remove()
    }
  }, [])

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onBackdropPress}>
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
    </Modal>
  )
}

export default memo(UpdateVersionRenderer)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
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
  // inner: {
  //   marginVertical: 15,
  //   maxHeight: 80,
  //   width: '100%',
  // },
  // txt: {
  //   marginBottom: 3,
  //   color: '#666',
  //   fontSize: 15,
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
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
    top: -10,
    right: 40,
  },
  closeIcon: {
    width: 26,
    height: 26,
  },
})
