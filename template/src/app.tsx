import 'react-native-gesture-handler'
import {AppStateStatus, StatusBar} from 'react-native'
import {enableScreens} from 'react-native-screens'
import {setI18nConfig} from '@i18n/setup'

enableScreens()
setI18nConfig()

// Data Providers
import {focusManager} from 'react-query'

// Network Status Provider and Hook
import {useOnlineManager} from './hooks/useOnlineManager'

// App State hook
import {useAppState} from './hooks/useAppState'

import {AppProvider} from './app-provider'

// Navigation
import {RootNavigator} from './navigation/navigators/root-navigator'

// Load React Query cache from the async storage
import {initPersistor} from '@services/api/reactQuery/init-persistor'
import {queryClient} from '@services/api/reactQuery/query-client'
initPersistor(queryClient)

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient})
  })
}

function onAppStateChange(status: AppStateStatus) {
  focusManager.setFocused(status === 'active')
}

export default function App() {
  useAppState(onAppStateChange)
  useOnlineManager()

  return (
    <AppProvider>
      <RootNavigator />
      <StatusBar />
    </AppProvider>
  )
}
