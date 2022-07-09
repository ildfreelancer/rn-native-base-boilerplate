import {useCallback} from 'react'
import {Box} from 'native-base'
import Routes from '@navigation/routes'
import {Screen, Text} from '@components/index'
import LinkItem from './components/link-item'

const HomeScreen = ({navigation}) => {
  const onLinkItemPress = useCallback(
    (topicTx: string) => () => {
      navigation.navigate(Routes.Guide, {topicTx})
    },
    [navigation],
  )

  return (
    <Screen>
      <Screen.Body safeAreaTop mx="s-5">
        <Text
          tx="introduction"
          textAlign="center"
          fontSize="xl"
          fontWeight="bold"
          fontFamily="base"
        />
        <Text tx="hint" mt="vs-1" textAlign="center" fontSize="xs" fontFamily="base" />
        <Box mt="vs-5">
          <LinkItem labelTx="path" usageTx="path_usage" onPress={onLinkItemPress('path')} />
          <LinkItem labelTx="i18n" usageTx="i18n_usage" onPress={onLinkItemPress('i18n')} />
          <LinkItem labelTx="fonts" usageTx="fonts_usage" onPress={onLinkItemPress('fonts')} />
          <LinkItem
            labelTx="responsive"
            usageTx="responsive_usage"
            onPress={onLinkItemPress('responsive')}
          />
          <LinkItem
            labelTx="components"
            usageTx="components_usage"
            onPress={onLinkItemPress('components')}
          />
          <LinkItem labelTx="theme" usageTx="theme_usage" onPress={onLinkItemPress('theme')} />
          <LinkItem
            labelTx="dark_mode"
            usageTx="dark_mode_usage"
            onPress={onLinkItemPress('dark_mode')}
          />
          <LinkItem
            labelTx="services"
            usageTx="services_usage"
            onPress={onLinkItemPress('services')}
          />
          <LinkItem
            labelTx="tips_and_tricks"
            usageTx="tips_and_tricks_usage"
            onPress={onLinkItemPress('tips_and_tricks')}
          />
        </Box>
      </Screen.Body>
    </Screen>
  )
}

export default HomeScreen
