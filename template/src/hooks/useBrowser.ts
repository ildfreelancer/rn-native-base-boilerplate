import {toast} from '@utils/toast'
import {useToken} from 'native-base'
import {useCallback} from 'react'
import {Linking} from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn'

export const useBrowser = () => {
  const primaryColor = useToken('colors', 'primary.400')

  const openLink = useCallback(
    async (link?: string) => {
      try {
        if (!link) {
          return
        }

        if (await InAppBrowser.isAvailable()) {
          await InAppBrowser.open(link, {
            // iOS Properties
            dismissButtonStyle: 'cancel',
            preferredBarTintColor: primaryColor,
            preferredControlTintColor: 'white',
            readerMode: false,
            animated: true,
            modalPresentationStyle: 'fullScreen',
            modalTransitionStyle: 'coverVertical',
            modalEnabled: true,
            enableBarCollapsing: false,
            // Android Properties
            showTitle: true,
            toolbarColor: primaryColor,
            secondaryToolbarColor: 'black',
            navigationBarColor: 'black',
            navigationBarDividerColor: 'white',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            // Specify full animation resource identifier(package:anim/name)
            // or only resource name(in case of animation bundled with app).
            animations: {
              startEnter: 'slide_in_right',
              startExit: 'slide_out_left',
              endEnter: 'slide_in_left',
              endExit: 'slide_out_right',
            },
          })
        } else {
          Linking.openURL(link)
        }
      } catch (error: any) {
        toast.show({
          type: 'error',
          message: error.message,
          messageTx: 'error_action_cannot_be_done',
        })
      }
    },
    [primaryColor],
  )

  return {
    openLink,
  }
}
