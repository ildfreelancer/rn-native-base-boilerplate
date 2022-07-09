import {Box, HStack, Pressable, Icon, IIconProps} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Text} from '@components/text'

type HeaderProps = {
  title?: string
  titleTx?: string
  titleTxOptions?: Record<string, string | number>
  onLeftPress?: () => void
  onRightPress?: () => void
  iconLeft?: string | boolean
  iconRight?: string | boolean
  _iconLeft?: IIconProps
  _iconRight?: IIconProps
}
export const Header = ({
  iconLeft = 'chevron-left',
  iconRight,
  title,
  titleTx,
  titleTxOptions,
  onLeftPress,
  onRightPress,
  _iconLeft,
  _iconRight,
}: HeaderProps) => {
  return (
    <>
      <Box safeAreaTop />
      <HStack
        px="s-4"
        py="vs-3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        borderBottomWidth={1}
        borderBottomColor="gray.200">
        <Pressable onPress={onLeftPress} w="20%">
          <Box w="20%">
            {!!iconLeft && (
              <Icon as={MaterialIcons} name={iconLeft as string} size="8" {..._iconLeft} />
            )}
          </Box>
        </Pressable>
        <HStack flexWrap="wrap" justifyContent="center" flex={1}>
          <Text
            textAlign="center"
            textTransform="capitalize"
            fontSize="lg"
            fontWeight="semibold"
            fontFamily="base"
            ml="s-3"
            text={title}
            tx={titleTx}
            txOptions={titleTxOptions}
          />
        </HStack>
        <Pressable onPress={onRightPress} w="20%">
          {!!iconRight && (
            <Icon as={MaterialIcons} name={iconRight as string} size="8" {..._iconRight} />
          )}
        </Pressable>
      </HStack>
    </>
  )
}
