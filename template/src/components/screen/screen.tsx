import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
import {Header} from '../header'
import {Flex, IBoxProps, IFlexProps} from 'native-base'
import {createContext, ReactNode, useContext} from 'react'
import {StatusBar} from 'react-native'

const ScreenContext = createContext({
  variant: 'fixed',
})
type ScreenProps = IBoxProps & {
  variant?: 'fixed' | 'scroll'
  barStyle?: 'light-content' | 'dark-content'
}
export const Screen = ({variant = 'fixed', barStyle = 'dark-content', ...rest}: ScreenProps) => {
  return (
    <ScreenContext.Provider value={{variant}}>
      <StatusBar barStyle={barStyle} />
      <Flex height="100%" {...rest} />
    </ScreenContext.Provider>
  )
}

type ScreenContainerProps = KeyboardAvoidingViewProps &
  KeyboardAwareScrollViewProps & {
    style?: StyleProp<ViewStyle>
    children?: ReactNode
  }
const ScreenContainer = ({style, children, ...props}: ScreenContainerProps) => {
  const {variant} = useContext(ScreenContext)
  return variant === 'fixed' ? (
    <KeyboardAvoidingView style={StyleSheet.flatten([styles.container, style])} {...props}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAwareScrollView
      style={StyleSheet.flatten([styles.container, style])}
      showsVerticalScrollIndicator={false}
      {...props}>
      {children}
    </KeyboardAwareScrollView>
  )
}

type ScreenBodyProps = IFlexProps & {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}
const ScreenBody = ({children, safeAreaBottom = true, ...props}: ScreenBodyProps) => {
  return (
    <Flex flex={1} {...props} pb={safeAreaBottom ? 'vs-6.5' : 0}>
      {children}
    </Flex>
  )
}

Screen.Header = Header
Screen.Container = ScreenContainer
Screen.Body = ScreenBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: '100%',
  },
})
