import { Selector, Dialog, Toast } from '@fruits-chain/react-native-xiaoshu'
import React, { useCallback, useRef, memo } from 'react'
import { Text, Keyboard } from 'react-native'
import RNConfig from 'react-native-config'

import EStyleSheet from '@/lib/react-native-extended-stylesheet'
import useHostStore from '@/stores/host'

interface CustomizeHostProps {
  text: string
}

const hosts = ['http://192.168.10.233:9406', 'https://pitaya-test.hjgpscm.com']
const logins = ['http://192.168.10.233:9433', 'https://auth-test.hjgpscm.com']
const customizeKey = '_'

/**
 * 自定义 HOST
 */
const CustomizeHost: React.FC<CustomizeHostProps> = ({ text }) => {
  const OnPressTime = useRef(0)
  const CleanOnPressTimeTimer = useRef(null)
  const { host, login, updateHost, updateLogin } = useHostStore()

  const onPressText = useCallback(() => {
    Keyboard.dismiss()

    clearTimeout(CleanOnPressTimeTimer.current)

    OnPressTime.current += 1

    if (OnPressTime.current === 3) {
      const chooseHost = () => {
        return new Promise<void>(resolve => {
          const isCustomize = hosts.indexOf(host) === -1
          Selector({
            title: '修改业务系统 HOST',
            options: hosts
              .map(item => ({
                value: item,
                label: item,
              }))
              .concat({
                value: customizeKey,
                label: `自定义${isCustomize ? `(${host})` : ''}`,
              }),
            value: isCustomize ? customizeKey : host,
          })
            .then(key => {
              if (key === customizeKey) {
                // 弹窗修改
                Dialog.input({
                  title: '自定义 HOST',
                  defaultValue: host,
                  placeholder: '请输入带协议的 URL 地址',
                  type: 'textarea',
                  textInput: {
                    maxLength: 40,
                  },
                  onPressConfirm: (t: string) => {
                    if (!/^https?:\/\//.test(t)) {
                      Toast('请输入正确的 URL 地址')
                      return false
                    }

                    updateHost(t)
                    resolve()
                  },
                })
              } else {
                updateHost(key as string)
                resolve()
              }
            })
            .catch(() => {})
        })
      }

      chooseHost().then(() => {
        const isCustomize = logins.indexOf(login) === -1
        Selector({
          title: '修改登录系统 HOST',
          options: logins
            .map(item => ({
              value: item,
              label: item,
            }))
            .concat({
              value: customizeKey,
              label: `自定义${isCustomize ? `(${login})` : ''}`,
            }),
          value: isCustomize ? customizeKey : login,
        }).then(key => {
          if (key === customizeKey) {
            // 弹窗修改
            Dialog.input({
              title: '自定义 HOST',
              defaultValue: login,
              placeholder: '请输入带协议的 URL 地址',
              type: 'textarea',
              textInput: {
                maxLength: 40,
              },
              onPressConfirm: t => {
                if (!/^https?:\/\//.test(t)) {
                  Toast('请输入正确的 URL 地址')
                  return false
                }

                updateLogin(t)
              },
            })
          } else {
            updateLogin(key as string)
          }
        })
      })

      OnPressTime.current = 0
    } else {
      CleanOnPressTimeTimer.current = setTimeout(() => {
        OnPressTime.current = 0
      }, 300)
    }
  }, [host, login, updateHost, updateLogin])

  return (
    <Text
      style={Styles.text}
      onPress={RNConfig.CUSTOMIZE_HOST ? onPressText : undefined}>
      {text}
    </Text>
  )
}

const Styles = EStyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
    height: 80,
    lineHeight: 80,
  },
})

export default memo(CustomizeHost)
