import {useEffect} from 'react'
import {AppState, AppStateStatus} from 'react-native'

export function useAppState(onChange: (appState: AppStateStatus) => void) {
  useEffect(() => {
    const appStateHandler = AppState.addEventListener('change', onChange)
    return () => {
      appStateHandler.remove()
    }
  }, [onChange])
}
