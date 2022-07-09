/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import Routes from '@navigation/routes'
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RoutesType<Type> = {
  [Property in keyof Type]: keyof Type
}

export type AllRoutesType = RoutesType<RootStackParamList> & RoutesType<RootTabParamList>

export type RootStackParamList = {
  [Routes.AuthorizedStack]: NavigatorScreenParams<RootTabParamList>
  [Routes.Guide]: {topicTx: string}
}

export type RootStackNavigationProps = StackNavigationProp<RootStackParamList>
export type RootNativeStackNavigationProps = NativeStackNavigationProp<RootStackParamList>

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>
export type RootNativeStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  [Routes.Home]: undefined
  [Routes.Profile]: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>

// Home Stack as single item of RootStack
export type CompositeAllNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<RootTabParamList>
>

// Example for nested stack
// export type HomeScreensStackParamList = {
//   Home: undefined
//   Guide: undefined
// }

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<RootTabParamList, 'Home'>,
//   NativeStackNavigationProp<HomeScreensStackParamList>
// >

// export type HomeStackScreenProps<Screen extends keyof HomeScreensStackParamList> =
//   NativeStackScreenProps<HomeScreensStackParamList, Screen>

// export type HomeScreenNavigationPropAlt = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, 'Home'>,
//   NativeStackScreenProps<HomeScreensStackParamList>
// >

// // For multiple parent navigators, this secondary type should be nested:
// type CommunityScreenNavigationPropAltMultipleParent = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, 'Home'>,
//   CompositeScreenProps<
//     NativeStackScreenProps<CommunityScreensStackParamList>,
//     DrawerScreenProps<DrawerParamList> // Nested screen
//   >
// >;
