import {Box, HStack, IconButton, Icon} from 'native-base'
import {Text} from '../text'
import {s} from '@libs/react-native-size-matters'
import ToastDefault from 'react-native-toast-message'
import {useCallback, useMemo} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface ToastWarningProps {
  internalState: Record<string, string | number>
  type: 'success' | 'error' | 'warning'
}

export const Toast = ({internalState: {text1, text2}, type}: ToastWarningProps) => {
  const _onClosePress = useCallback(() => {
    ToastDefault.hide()
  }, [])

  const bgColor = useMemo(() => {
    if (type === 'error') {
      return 'red.500'
    }
    if (type === 'warning') {
      return 'yellow.500'
    }
    return 'green.500'
  }, [type])

  return (
    <Box w="100%">
      <HStack mx="s-4" p="s-4" shadow="0" bg={bgColor} borderRadius="s-2" alignItems="center">
        <Box flex={1} justifyContent="center">
          {!!text1 && <Text fontSize="xl" color="white" text={text1} numberOfLines={4} />}
          {!!text2 && <Text fontSize="md" color="white" text={text2} numberOfLines={4} />}
        </Box>
        <Box position="absolute" top="s-1" right="s-2">
          <IconButton
            icon={<Icon as={MaterialIcons} name="close" color="white" size={s(5)} />}
            onPress={_onClosePress}
          />
        </Box>
      </HStack>
    </Box>
  )
}

export const toastConfig = {
  success: internalState => <Toast type="success" internalState={internalState} />,
  error: internalState => <Toast type="error" internalState={internalState} />,
  warning: internalState => <Toast type="warning" internalState={internalState} />,
}
