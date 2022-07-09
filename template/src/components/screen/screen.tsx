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
import {Flex, IFlexProps} from 'native-base'
import {createContext, ReactNode, useContext} from 'react'

const ScreenContext = createContext({
  variant: 'fixed',
})
type ScreenProps = {
  variant?: 'fixed' | 'scroll'
  children?: ReactNode
}
export const Screen = ({variant = 'fixed', children}: ScreenProps) => {
  return (
    <ScreenContext.Provider value={{variant}}>
      <Flex height="100%">{children}</Flex>
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
const ScreenBody = ({children, ...props}: ScreenBodyProps) => {
  return (
    <Flex flex={1} safeAreaBottom {...props}>
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
