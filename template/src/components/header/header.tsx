import {Box, HStack, Pressable} from 'native-base'
import {Text, TextProps} from '@components/text'
import {ReactNode} from 'react'
import {Icon, IconProps} from '@components/icon'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

type HeaderProps = {
  title?: string
  titleTx?: string
  titleTxOptions?: Record<string, string | number>
  onLeftPress?: () => void
  onRightPress?: () => void
  iconLeft?: string | boolean
  iconRight?: string | boolean
  _iconLeft?: IconProps
  _iconRight?: IconProps
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  _title?: TextProps
}
export const Header = ({
  iconLeft = 'chevron-left',
  iconRight,
  title,
  titleTx,
  titleTxOptions,
  onLeftPress,
  onRightPress,
  leftComponent,
  rightComponent,
  _iconLeft,
  _iconRight,
  _title,
}: HeaderProps) => {
  return (
    <>
      <Box safeAreaTop />
      <HStack px="s-6" py="vs-4" justifyContent="space-between" alignItems="center" w="100%">
        <Pressable onPress={onLeftPress} w="25%">
          {leftComponent
            ? leftComponent
            : !!iconLeft && (
                <Icon
                  h="s-9"
                  name={iconLeft as string}
                  as={FontAwesome}
                  size="s-4"
                  w="s-18"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="s-2.5"
                  {..._iconLeft}
                />
              )}
        </Pressable>
        <HStack flexWrap="wrap" justifyContent="center" flex={1} mx="s-3">
          <Text
            textAlign="center"
            textTransform="capitalize"
            text={title}
            tx={titleTx}
            isTruncated
            fontSize="lg"
            txOptions={titleTxOptions}
            {..._title}
          />
        </HStack>

        <Pressable onPress={onRightPress} w="25%" alignItems="flex-end">
          {rightComponent
            ? rightComponent
            : !!iconRight && <Icon name={iconRight as string} size="s-6" {..._iconRight} />}
        </Pressable>
      </HStack>
    </>
  )
}
