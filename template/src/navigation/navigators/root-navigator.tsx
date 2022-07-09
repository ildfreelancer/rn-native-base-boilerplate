import Routes from '@navigation/routes'
import {createStackNavigator} from '@react-navigation/stack'
import {RootStackParamList} from '@typings/navigation'

const Stack = createStackNavigator<RootStackParamList>()
export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.AuthorizedStack}
        component={require('./authorized-navigator').default}
      />
      <Stack.Screen name={Routes.Guide} component={require('@screens/guide-screen').default} />
    </Stack.Navigator>
  )
}

const exitRoutes = [Routes.AuthorizedStack]
export const canExit = (routeName: string) => exitRoutes.includes(routeName as any)
