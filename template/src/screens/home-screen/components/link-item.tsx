import {Pressable, Flex} from 'native-base'
import {Text} from '@components/text'

type LinkItemProps = {
  labelTx: string
  usageTx: string
  onPress: () => void
}
const LinkItem = ({labelTx, usageTx, onPress}: LinkItemProps) => (
  <Pressable onPress={onPress} mt="vs-5" flexDirection="row">
    <Flex w="30%">
      <Text tx={labelTx} fontSize="xs" fontWeight="medium" fontFamily="base" />
    </Flex>
    <Flex flex={1} flexWrap="wrap" flexDirection="row" ml="s-3">
      <Text tx={usageTx} fontSize="xs" fontWeight="medium" fontStyle="base" />
    </Flex>
  </Pressable>
)

export default LinkItem
