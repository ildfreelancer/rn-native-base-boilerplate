import {BottomSheetHandleProps, useBottomSheetModal} from '@gorhom/bottom-sheet'
import {FC, useContext} from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import {s, vs} from '@libs/react-native-size-matters'
import {Center, Pressable} from 'native-base'
import {Icon} from '@components/icon'
import {BottomModalContext} from '../bottom-modal'

interface HandleProps extends BottomSheetHandleProps {
  style?: StyleProp<ViewStyle>
}

export const BottomSheetHandle: FC<HandleProps> = ({style}) => {
  const {name} = useContext(BottomModalContext)
  const {dismiss} = useBottomSheetModal()

  return (
    <Center
      borderTopRadius="s-3"
      bg="primary.50"
      w="full"
      style={style}
      renderToHardwareTextureAndroid={true}>
      <Pressable top={-vs(20)} position="absolute" onPress={() => dismiss(name)}>
        <Icon name="close-circle" color="black" size="s-14" />
      </Pressable>
    </Center>
  )
}
