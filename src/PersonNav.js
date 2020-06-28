import React from 'react'
import { Image, Text } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'

import HomeScreen from './container/Person/Home/Index'
import CategoryAllScreen from './container/Person/Home/CategoryAll'
import CategoryItemsScreen from './container/Person/Home/CategoryItems'
import ItemDetailScreen from './container/Person/Home/ItemDetail'
import ItemSellerScreen from './container/Person/Home/ItemSeller'
import SearchScreen from './container/Person/Search/Index'
import CartScreen from './container/Person/Cart/Index'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
})

const Home = require('./assets/images/Home.png')
const HomeSelected = require('./assets/images/HomeSelected.png')
const Search = require('./assets/images/Search.png')
const SearchSelected = require('./assets/images/SearchSelected.png')
const Cart = require('./assets/images/Cart.png')
const CartSelected = require('./assets/images/CartSelected.png')

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    CategoryAll: {
      screen: CategoryAllScreen,
      navigationOptions: {
        headerShown: false,
        tabBarVisible: true
      }
    },
    CategoryItems: {
      screen: CategoryItemsScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    ItemDetail: {
      screen: ItemDetailScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    ItemSeller: {
      screen: ItemSellerScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    Search: {
      screen: SearchScreen,
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

  return {
    tabBarLabel: ({ focused }) => (
      <Text
        bold={focused ? true : false}
        style={
          focused
            ? { textAlign: 'center', fontSize: RFValue(9, 580), color: "#F2E201" }
            : { textAlign: 'center', fontSize: RFValue(9, 580), color: '#B1B7C5' }
        }>
        Home
      </Text>
    ),
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          width: 28,
          height: 28,
          margin: 12
        }}
        source={
          focused
            ? HomeSelected
            : Home
        }
      />
    ),
    ...navigationOptions,
  };
}
HomeStack.path = ''

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerShown: false,
      }
    }
  }
)
SearchStack.navigationOptions = ({ navigation }) => {
  let navigationOptions = {};
  if (navigation.state.routes[navigation.state.index].routeName !== 'Search') {
    navigationOptions.tabBarVisible = false;
  }

  return {
    tabBarLabel: ({ focused }) => (
      <Text
        bold={focused ? true : false}
        style={
          focused
            ? { textAlign: 'center', fontSize: RFValue(9, 580), color: "#F2E201" }
            : { textAlign: 'center', fontSize: RFValue(9, 580), color: '#B1B7C5' }
        }>
        Search
      </Text>
    ),
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          width: 28,
          height: 28,
          margin: 12
        }}
        source={
          focused
            ? SearchSelected
            : Search
        }
      />
    ),
    ...navigationOptions,
  };
}
SearchStack.path = ''

const CartStack = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        headerShown: false,
      }
    }
  }
)
CartStack.navigationOptions = ({ navigation }) => {
  let navigationOptions = {};
  if (navigation.state.routes[navigation.state.index].routeName !== 'Cart') {
    navigationOptions.tabBarVisible = false;
  }

  const Back = require('./assets/images/Back.png')

  return {
    tabBarLabel: ({ focused }) => (
      <Text
        bold={focused ? true : false}
        style={
          focused
            ? { textAlign: 'center', fontSize: RFValue(9, 580), color: "#F2E201" }
            : { textAlign: 'center', fontSize: RFValue(9, 580), color: '#B1B7C5' }
        }>
        Cart
      </Text>
    ),
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          width: 28,
          height: 28,
          margin: 12
        }}
        source = {
          focused
            ? CartSelected  
            : Cart
        }
      />
    ),
    ...navigationOptions,
  };
}
CartStack.path = ''

const PersonTabNav = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    CartStack
  },
  {
    tabBarOptions: {
      style: {
        height: 60,
        paddingVertical: 4  ,
        backgroundColor: "#3D5B9B"
      },
      activeTintColor: '#F2E201',
      inactiveTintColor: '#fff',
      allowFontScaling: false,
    },
  }
)
PersonTabNav.path = ''

export default PersonTabNav