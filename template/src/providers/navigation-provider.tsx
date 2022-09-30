import {ReactNode} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {navigationRef} from '@navigation/utilities'
import {navigationDefaultTheme} from '@styles/theme'

export const NavigationProvider = ({children}: {children?: ReactNode}) => {
  return (
    <NavigationContainer ref={navigationRef} theme={navigationDefaultTheme}>
      {children}
    </NavigationContainer>
  )
}
