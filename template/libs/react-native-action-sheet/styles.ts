import {StyleSheet} from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: '#000',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#e5e5e5',
  },
  bodyDark: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#404040',
  },
  bodyIos: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 8,
  },
  titleBox: {
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageBox: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 13,
    textAlign: 'center',
  },
  textLightTheme: {
    color: '#7c7c7c',
  },
  textDarkTheme: {
    color: '#a4a4A4',
  },
  buttonBox: {
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  cancelButtonBox: {
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  roundedBox: {
    borderRadius: 13,
    overflow: 'hidden',
  },
}
