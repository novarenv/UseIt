import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('window')

const Index = props => {
  const logoUseIt = require('../assets/images/LogoUseIt.png')
  const Profile = require('../assets/images/Profile.png')
  const Factory = require('../assets/images/Factory.png')

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#fff'
        >
          <View style={{ height: height, padding: RFValue(24, 580) }}>
            <View style={{ marginTop: 52, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: RFValue(200, 580), height: RFValue(200, 580) }} source={logoUseIt} />
            </View>

            <TouchableOpacity
              style={{
                marginTop: RFValue(180,580), paddingVertical: RFValue(10, 580),
                backgroundColor: '#E1E1E8', borderRadius: 200, justifyContent: 'center',
                alignItems: 'center', flexDirection: 'row', paddingHorizontal: 32
              }}
              onPress={() => props.navigation.navigate("loginPerson")}
            >
              <Text style={{ fontWeight: 'bold' }}>I'm Enviromental Movers</Text>
              <View style={{ marginLeft: 48 }}>
                <Image style={{ width: 16, height: 16 }} source={Profile} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 20, paddingVertical: RFValue(10, 580),
                backgroundColor: '#E1E1E8', borderRadius: 200, justifyContent: 'center',
                alignItems: 'center', flexDirection: 'row', paddingHorizontal: 32
              }}
              onPress={() => props.navigation.navigate("loginCompany")}
            >
              <Text style={{ fontWeight: 'bold' }}>We Want Profit</Text>
              <View style={{ marginLeft: 112 }}>
                <Image style={{ width: 16, height: 16 }} source={Factory} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index
