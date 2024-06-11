import { Provider } from '@fruits-chain/react-native-xiaoshu'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import UpdateVersion from '@/components/update-version'

import Router from './router'

import 'react-native-gesture-handler'

import './custom-components-config'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <Router />
        <UpdateVersion />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
