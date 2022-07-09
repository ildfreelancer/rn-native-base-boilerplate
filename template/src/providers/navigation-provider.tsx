import {FC, ReactElement} from 'react'
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {useColorMode} from 'native-base'
import {navigationRef} from '@navigation/utilities'
import linking from '@navigation/linking'

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export const NavigationProvider: FC = ({children}: ReactElement) => {
  const {colorMode} = useColorMode()
  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      theme={colorMode === 'dark' ? DarkTheme : customDefaultTheme}>
      {children}
    </NavigationContainer>
  )
}
