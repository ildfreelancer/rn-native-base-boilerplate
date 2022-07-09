import 'react-native-gesture-handler'
import {AppRegistry, LogBox, Text} from 'react-native'

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.maxFontSizeMultiplier = 1.2
import Config from 'react-native-config'

// Setup responsive scale across the devices
import {setSizeMattersBaseWidth, setSizeMattersBaseHeight} from '@libs/react-native-size-matters'
setSizeMattersBaseWidth(parseInt(Config.SIZE_MATTERS_BASE_WIDTH, 10))
setSizeMattersBaseHeight(parseInt(Config.SIZE_MATTERS_BASE_HEIGHT, 10))

import App from './src/app'
import {name as appName} from './app.json'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'ViewPropTypes will be removed',
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  'Non-serializable values were found in the navigation state',
])

AppRegistry.registerComponent(appName, () => App)
