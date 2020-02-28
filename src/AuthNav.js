import React from 'react';
import { } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import IndexScreen from './container/Index'
import LoginPersonScreen from './container/LoginPerson'
import LoginCompanyScreen from './container/LoginCompany'
import CreatePersonScreen from './container/CreatePerson'
import CreateCompanyScreen from './container/CreateCompany'

import PersonNav from './PersonNav'


const AuthStack = createStackNavigator(
  {
    index: {
      screen: IndexScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    loginCompany: {
      screen: LoginCompanyScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    loginPerson: {
      screen: LoginPersonScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    createPerson: {
      screen: CreatePersonScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    createCompany: {
      screen: CreateCompanyScreen,
      navigationOptions: {
        headerShown: false,
      }
    }
  }
)

const AuthNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Person: PersonNav
    },
    {
      initialRouteName: "Auth"
    }
  )
)

const AuthNav = () => {
  return (
    <AuthNavigator />
  )
}

export default AuthNav