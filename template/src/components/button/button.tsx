import {Button as NBButton, IButtonProps} from 'native-base'
import {useTranslation} from 'react-i18next'
import {Text, TextProps} from '../text'

export type ButtonProps = IButtonProps & {
  label?: string
  labelTx?: string
  isLoadingTx?: string
  labelTxOptions?: Record<string, string | number>
  isLoadingTxOptions?: Record<string, string | number>
  _text?: TextProps
}
export const Button = ({
  label,
  labelTx,
  labelTxOptions,
  children,
  _text,
  isDisabled,
  isLoadingTx,
  isLoadingText,
  isLoadingTxOptions,
  ...rest
}: ButtonProps) => {
  const {t} = useTranslation()
  const color = isDisabled ? 'brown.300' : _text?.color || 'white'
  const content = children ? (
    children
  ) : (
    <Text
      tx={labelTx}
      text={label}
      txOptions={labelTxOptions}
      color={color}
      fontSize="md"
      {..._text}
    />
  )

  const loadingText = isLoadingText
    ? isLoadingText
    : isLoadingTx
    ? t(isLoadingTx as any, isLoadingTxOptions)
    : null
  return (
    <NBButton isDisabled={isDisabled} isLoadingText={loadingText} {...rest}>
      {content}
    </NBButton>
  )
}
