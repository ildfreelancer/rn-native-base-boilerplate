/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native'
import {RootStackParamList} from '@typings/navigation'

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    /* your linking prefixes */
    // 'boilerplate://',
    // 'https://boilerplate.com',
    // 'https://*.boilerplate.com',
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {},
  },
}

export default linking
