import {Dimensions} from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export default {
  window: {
    width: windowWidth,
    height: windowHeight,
  },
  isSmallDevice: windowWidth < 375,
}
