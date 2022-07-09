import {INativebaseConfig} from 'native-base'

const nativeBaseConfig: INativebaseConfig = {
  strictMode: 'warn',
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
}

export default nativeBaseConfig
