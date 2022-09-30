import 'react-native-gesture-handler'
import {AppStateStatus, StatusBar} from 'react-native'
import {enableScreens} from 'react-native-screens'
import {setI18nConfig} from '@i18n/setup'
import {ActionSheet} from '@components/action-sheet'
import {Storage} from '@utils/mmkv'

enableScreens()
setI18nConfig()

// Others
import Orientation from 'react-native-orientation-locker'

// Data Providers
import {focusManager} from '@tanstack/react-query'

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
import {useEffect} from 'react'
import {toastConfig} from '@components/toast'
import Toast from 'react-native-toast-message'

// init mmkv storage
Storage.setup({
  id: 'global-storage',
  encryptionKey: 'mmkv-storage',
})

initPersistor(queryClient)

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient})
  })
  import('react-native-mmkv-flipper-plugin').then(({initializeMMKVFlipper}) => {
    initializeMMKVFlipper({default: Storage.instance.getStorage()})
  })
}

function onAppStateChange(status: AppStateStatus) {
  focusManager.setFocused(status === 'active')
}

export default function App() {
  useAppState(onAppStateChange)
  useOnlineManager()

  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])

  return (
    <AppProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
      <Toast config={toastConfig} />
      <ActionSheet />
    </AppProvider>
  )
}
