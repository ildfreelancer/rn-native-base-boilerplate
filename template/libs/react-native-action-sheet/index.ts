import {Platform, TextStyle, ViewStyle} from 'react-native'
import _ActionSheetIOS from './ActionSheetIOS'
import _ActionSheetCustom from './ActionSheetCustom'

type Props = {
  options: string[]
  onPress: (index: number) => void
  title?: string
  message?: string
  tintColor?: string
  cancelButtonIndex?: number
  destructiveButtonIndex?: number
  /**
   * Only for Android or ActionSheetCustom
   */
  styles?: {
    titleBox?: ViewStyle
    titleText?: TextStyle

    messageBox?: ViewStyle
    messageText?: TextStyle

    buttonText?: TextStyle
    buttonBox?: ViewStyle
    cancelButtonBox?: ViewStyle

    overlay?: TextStyle
    wrapper?: ViewStyle
    body?: ViewStyle
  }

  /**
   * Change theme color
   * @default system theme color
   */
  userInterfaceStyle?: 'light' | 'dark'
}

export type ActionSheetProps = Props & {
  /**
   * Android only.
   * **ios** theme is similar to the iOS ActionSheet with rounded boxes
   * @default flat
   */
  theme?: 'flat' | 'ios'
}

export const ActionSheetCustom = _ActionSheetCustom

let ActionSheet

if (Platform.OS === 'ios') {
  ActionSheet = _ActionSheetIOS
} else {
  ActionSheet = _ActionSheetCustom
}

export default ActionSheet
