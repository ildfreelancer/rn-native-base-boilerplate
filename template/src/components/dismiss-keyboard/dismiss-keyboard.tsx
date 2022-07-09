import {useCallback} from 'react'
import {TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native'

export const DismissKeyboard = ({children}) => {
  const _onKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss()
  }, [])
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={_onKeyboardDismiss}>
      {children}
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
