import 'react-native-gesture-handler'
import { ApolloProvider } from '@apollo/client'
import DesignTokensBailuVar from '@fruits-chain/design-tokens-bailu/lib/e-stylesheet.js'
import { Provider as XiaoshuProvider } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

LogBox.ignoreAllLogs(true)

import {
  ErrorBoundary,
  initExceptionHandler,
} from '@/components/error-boundary'
import UpdateVersion from '@/components/update-version'
import apolloClient from '@/graphql/client'
import EStyleSheet from '@/lib/react-native-extended-stylesheet'
import Router from '@/router'
import '@/assets/custom-components-config'

// 自定义主题
const customTheme = {
  dropdown_text_icon_size: 12,
}

const customThemeVar = Object.keys(customTheme).reduce<
  Record<string, string | number>
>((pre, cur) => {
  pre[`$${cur}`] = customTheme[cur]
  return pre
}, {})

EStyleSheet.build({
  ...DesignTokensBailuVar,
  ...customThemeVar,
})

initExceptionHandler()

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <UpdateVersion />
          <XiaoshuProvider theme={customTheme}>
            <Router />
          </XiaoshuProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

export default App
