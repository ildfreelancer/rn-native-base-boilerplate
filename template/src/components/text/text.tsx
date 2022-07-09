import {Text as NBText, ITextProps} from 'native-base'
import {useTranslation} from 'react-i18next'

export type TextProps = ITextProps & {
  text?: string
  tx?: string
  txOptions?: Record<string, string | number>
}
export const Text = ({text, tx, txOptions, children, ...rest}: TextProps) => {
  const {t} = useTranslation()
  const content = text || children ? text || children : t(tx as never, txOptions)
  return <NBText {...rest}>{content}</NBText>
}
