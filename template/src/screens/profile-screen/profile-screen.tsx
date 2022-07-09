import {Screen, Text} from '@components/index'
import {Center} from 'native-base'

const ProfileScreen = () => {
  return (
    <Screen>
      <Screen.Body safeAreaTop mx="s-5">
        <Center flex={1}>
          <Text>(This is hardcoded text)</Text>
          <Text mt="vs-3" textAlign="center">
            The idea of this boilerplate is to provide the setup out of box, no magic and easy to
            customize.
          </Text>
          <Text mt="vs-5" fontWeight="semibold">
            More magic, more headache.
          </Text>
        </Center>
      </Screen.Body>
    </Screen>
  )
}

export default ProfileScreen
