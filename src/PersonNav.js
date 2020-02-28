import React from 'react'
import { Image, Text } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'

import HomeScreen from './container/Person/Home/Index'
import ShippingScreen from './container/Person/Shipping/Index'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
})

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    }
  },
  config
)
HomeStack.navigationOptions = ({ navigation }) => {
  let navigationOptions = {};
  if (navigation.state.routes[navigation.state.index].routeName !== 'Home') {
    navigationOptions.tabBarVisible = false;
  }

  const Back = require('./assets/images/Back.png')

  return {
    tabBarLabel: ({ focused }) => (
      <Text
        bold={focused ? true : false}
        style={
          focused
            ? { textAlign: 'center', fontSize: RFValue(9, 580) }
            : { textAlign: 'center', fontSize: RFValue(9, 580), color: '#B1B7C5' }
        }>
        Home
      </Text>
    ),
    tabBarIcon: ({ focused }) => (
      <Image
        style={
          focused
            ? {
              opacity: 1,
              width: 28,
              height: 28,
              margin: 12
            }
            : {
              opacity: 0.2,
              width: 28,
              height: 28,
              margin: 12
            }}
        source={Back}
      />
    ),
    ...navigationOptions,
  };
}
HomeStack.path = ''

const ShippingStack = createStackNavigator(
  {
    Shipping: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    }
  }
)
ShippingStack.navigationOptions = ({ navigation }) => {
  let navigationOptions = {};
  if (navigation.state.routes[navigation.state.index].routeName !== 'Shipping') {
    navigationOptions.tabBarVisible = false;
  }

  const Back = require('./assets/images/Back.png')

  return {
    tabBarLabel: ({ focused }) => (
      <Text
        bold={focused ? true : false}
        style={
          focused
            ? { textAlign: 'center', fontSize: RFValue(9, 580) }
            : { textAlign: 'center', fontSize: RFValue(9, 580), color: '#B1B7C5' }
        }>
        Shipping
      </Text>
    ),
    tabBarIcon: ({ focused }) => (
      <Image
        style={
          focused
            ? {
              opacity: 1,
              width: 28,
              height: 28,
              margin: 12
            }
            : {
              opacity: 0.2,
              width: 28,
              height: 28,
              margin: 12
            }}
        source={Back}
      />
    ),
    ...navigationOptions,
  };
}
ShippingStack.path = ''

const PersonNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ShippingStack
  },
  {
    tabBarOptions: {
      style: {
        height: 60,
        paddingBottom: 8,
        backgroundColor: "#3D5B9B"
      },
      activeTintColor: '#F2E201',
      inactiveTintColor: '#fff',
      allowFontScaling: false,
    },
  }
)
PersonNavigator.path = ''

export default PersonNavigator