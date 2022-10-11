import 'react-native-gesture-handler'
import '@/assets/custom-components-config'
import '@/assets/custom-theme'
import { ApolloProvider } from '@apollo/client'
import { Provider as XiaoshuProvider } from '@fruits-chain/react-native-xiaoshu'
import React, { useEffect } from 'react'
import { LogBox } from 'react-native'
import * as RNBootSplash from 'react-native-bootsplash'
import { SafeAreaProvider } from 'react-native-safe-area-context'

LogBox.ignoreAllLogs(true)

import { customTheme } from '@/assets/custom-theme-var'
import {
  ErrorBoundary,
  initExceptionHandler,
} from '@/components/error-boundary'
import UpdateVersion from '@/components/update-version'
import apolloClient from '@/graphql/client'
import Router from '@/router'

initExceptionHandler()

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <XiaoshuProvider theme={customTheme}>
            <UpdateVersion />
            <Router />
          </XiaoshuProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </ApolloProvider>
  )
}

export default App
