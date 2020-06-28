import React, { useRef, useState } from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { TextInput } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('window')

const Login = props => {
  const [username, setUsername] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const inputUsername = useRef(null)

  const Back = require('../assets/images/Back.png')
  const HeaderBg = require('../assets/images/HeaderBg.png')
  const LogoUseIt = require('../assets/images/LogoUseIt.png')

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#fff'
        >
          <ImageBackground source={HeaderBg} style={{ width: "100%", height: RFValue(80, 580) }}>
            <TouchableOpacity
              onPress={() => props.navigation.pop()}
            >
              <Image
                style={{
                  width: 28,
                  height: 28,
                  margin: 12
                }}
                source={Back}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ height: height, padding: RFValue(24, 580) }}>
            <View style={{ marginTop: 16, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#3D5B9B', fontSize: RFValue(32, 580) }}>Company</Text>
            </View>

            <View style={{ marginTop: RFValue(8, 580), alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: RFValue(200, 580), height: RFValue(200, 580) }} source={LogoUseIt} />
            </View>

            <View style={{ marginTop: 92 }}>
              <TextInput
                maxLength={50}
                ref={inputUsername}
                error={errorUsername}
                label="Username"
                fontSize={RFValue(14, 580)}
                labelFontSize={RFValue(11, 580)}
                autoCapitalize="none"
                value={username}
                onChangeText={val => {
                  setErrorUsername('');
                  setUsername(val);
                }}
                style={{ backgroundColor: '#fff' }}
              />

              <TextInput
                maxLength={50}
                error={errorPassword}
                label="Password"
                fontSize={RFValue(14, 580)}
                labelFontSize={RFValue(11, 580)}
                autoCapitalize="none"
                value={password}
                onChangeText={val => {
                  setErrorPassword('');
                  setPassword(val);
                }}
                style={{ backgroundColor: '#fff' }}
              />
            </View>

            <TouchableOpacity
              style={{ marginTop: 32, paddingVertical: RFValue(10, 580), backgroundColor: '#3D5B9B', borderRadius: 200, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                console.log(props.navigation.navigate)
              }}
              onPress={() => props.navigation.navigate("Company")}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Make it Profit !</Text>
            </TouchableOpacity>

            <View
              style={{ marginTop: 16, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text
                style={{ color: '#3D5B9B' }}
                onPress={() => {
                  props.navigation.navigate("createCompany")
                }}
              >
                I don't Have Account
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Login
