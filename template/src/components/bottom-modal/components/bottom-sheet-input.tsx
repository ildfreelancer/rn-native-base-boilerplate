import {BottomSheetTextInput} from '@gorhom/bottom-sheet'
import {BottomSheetTextInputProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput'
import {useToken} from 'native-base'
import {useTranslation} from 'react-i18next'

type BottomSheetInputProps = BottomSheetTextInputProps & {
  placeholderTx?: string
  placeholderTxOptions?: Record<string, string | number>
}
export const BottomSheetInput = ({
  placeholderTx,
  placeholderTxOptions,
  placeholder,
  selectionColor = 'primary.400',
  placeholderTextColor = 'brownA04',
  ...rest
}: BottomSheetInputProps) => {
  const {t} = useTranslation()
  const [primary, secondary] = useToken('colors', [selectionColor, placeholderTextColor] as any)
  const transformedPlaceholder = placeholder
    ? placeholder
    : t(placeholderTx as any, placeholderTxOptions)

  return (
    <BottomSheetTextInput
      selectionColor={primary}
      placeholderTextColor={secondary}
      placeholder={transformedPlaceholder}
      {...rest}
    />
  )
}
