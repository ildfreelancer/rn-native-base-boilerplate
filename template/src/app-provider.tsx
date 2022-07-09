import {Suspense, ReactNode} from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {NativeBaseProvider, StorageManager, ColorMode, Spinner, Center} from 'native-base'
import {nativeBaseTheme} from './styles/theme'
import {QueryClientProvider} from 'react-query'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ProvideScreenDimensions} from './hooks/useScreenDimensions'
import {queryClient} from '@services/api/reactQuery/query-client'
import {NetworkStatusProvider} from './providers/network-status-provider'
import {combineProviders} from '@utils/combine-providers'
import {NavigationProvider} from '@providers/navigation-provider'
import {loadString, saveString} from '@utils/storage'

// Define the colorModeManager,
const colorModeManagerNative: StorageManager = {
  get: async () => {
    try {
      const val = await loadString('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await saveString('@color-mode', value || 'light')
    } catch (e) {
      console.log(e)
    }
  },
}

// Providers with preset props
const ROOT_VIEW = {flex: 1}
const GestureHandlerProvider = (props: {children?: ReactNode}) => (
  <GestureHandlerRootView style={ROOT_VIEW} {...props} />
)

const RTQueryClientProvider = (props: {children?: ReactNode}) => (
  <QueryClientProvider client={queryClient} {...props} />
)

// const ReduxProvider = (props: {children?: ReactNode}) => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       {props.children}
//     </PersistGate>
//   </Provider>
// );

const SuspenseProvider = (props: {children?: ReactNode}) => (
  <Suspense
    fallback={
      <Center flex={1}>
        <Spinner size="lg" color="primary.600" />
      </Center>
    }
    {...props}
  />
)

const NativeBaseThemeProvider = (props: {children?: ReactNode}) => (
  <NativeBaseProvider
    theme={nativeBaseTheme}
    colorModeManager={colorModeManagerNative}
    {...props}
  />
)

export const AppProvider = ({children}: {children?: ReactNode}) =>
  combineProviders(
    [
      // order matters here, be careful!
      // if Provider A is using another Provider B, then A needs to appear below B.
      GestureHandlerProvider,
      SafeAreaProvider,
      ProvideScreenDimensions,
      NativeBaseThemeProvider,
      SuspenseProvider,
      RTQueryClientProvider,
      NetworkStatusProvider,
      NavigationProvider,
    ],
    children,
  )
