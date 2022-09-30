import {Input, IInputProps} from 'native-base'
import {useTranslation} from 'react-i18next'

export type TextFieldProps = IInputProps & {
  placeholderTx?: string
  placeholderTxOptions?: Record<string, string | number>
}
export const TextField = ({
  placeholder,
  placeholderTx,
  placeholderTxOptions,
  ...rest
}: TextFieldProps) => {
  const {t} = useTranslation()
  const transformedPlaceholder = placeholder
    ? placeholder.toString()
    : t(placeholderTx as never, placeholderTxOptions)
  return (
    <Input
      selectionColor="primary.400"
      placeholderTextColor="brownA04"
      placeholder={transformedPlaceholder}
      {...rest}
    />
  )
}
