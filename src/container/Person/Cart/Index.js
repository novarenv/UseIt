import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  ImageBackground,
  ToastAndroid
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Avatar } from 'react-native-paper';

const { height } = Dimensions.get('window')

const Index = props => {
  const Robberson = require('../../../assets/images/Robberson.png')
  const HomeBg = require('../../../assets/images/HomeBg.png')
  const Matchwood = require('../../../assets/images/Matchwood.png')
  const IronScrap = require('../../../assets/images/IronScrap.png')

  const stocks = []

  for (let i = 0; i < 5; i++) {
    stocks.push(
      <View>
        <TouchableOpacity
          onPress={() => ToastAndroid.show('Stock\'s selected !', ToastAndroid.SHORT)}
          style={{ alignItems: "center", marginBottom: 12 }}
        >
          <View flexDirection="row" style={{ backgroundColor: "#fff", width: RFValue(264, 580), height: RFValue(100, 580), borderRadius: 20 }}>
            <Image source={Matchwood} style={{ width: RFValue(80, 580), height: RFValue(82, 580), borderRadius: 20, margin: 12 }} />
            <View style={{ marginVertical: 12, flex: 1, marginRight: 12 }}>
              <View flexDirection="row" justifyContent="space-between">
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Matchwood
                </Text>

                <View style={{ backgroundColor: "#3D5B9B", width: RFValue(56, 580), borderRadius: 20, alignItems: "center" }}>
                  <Text style={{ color: "#fff" }}>
                    Updated
                      </Text>
                </View>
              </View>

              <Text style={{ color: "#aaa" }}>
                Monday, 11/11/2019
                  </Text>

              <View flexDirection="row" justifyContent="space-between" style={{ marginTop: 38, marginBottom: 4 }}>
                <Text>
                  Stock
                    </Text>
                <Text style={{ color: "#e80" }}>
                  15 kg <Text style={{ color: "black" }}>/ 100 kg</Text>
                </Text>
              </View>
              <View style={{ width: "100%", height: 12, backgroundColor: "#bbb", borderRadius: 20 }}>
                <View style={{ width: "15%", height: 12, backgroundColor: "#e80", borderRadius: 20 }} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => ToastAndroid.show('Stock\'s selected !', ToastAndroid.SHORT)}
          style={{ alignItems: "center", marginBottom: 12 }}
        >
          <View flexDirection="row" style={{ backgroundColor: "#fff", width: RFValue(264, 580), height: RFValue(100, 580), borderRadius: 20 }}>
            <Image source={IronScrap} style={{ width: RFValue(80, 580), height: RFValue(82, 580), borderRadius: 20, margin: 12 }} />
            <View style={{ marginVertical: 12, flex: 1, marginRight: 12 }}>
              <View flexDirection="row" justifyContent="space-between">
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Iron Scrap
                </Text>

                <View style={{ backgroundColor: "#3D5B9B", width: RFValue(56, 580), borderRadius: 20, alignItems: "center" }}>
                  <Text style={{ color: "#fff" }}>
                    Updated
                      </Text>
                </View>
              </View>

              <Text style={{ color: "#aaa" }}>
                Monday, 18/11/2019
                  </Text>

              <View flexDirection="row" justifyContent="space-between" style={{ marginTop: 38, marginBottom: 4 }}>
                <Text>
                  Stock
                    </Text>
                <Text style={{ color: "#5c0" }}>
                  90 kg <Text style={{ color: "black" }}>/ 100 kg</Text>
                </Text>
              </View>
              <View style={{ width: "100%", height: 12, backgroundColor: "#bbb", borderRadius: 20 }}>
                <View style={{ width: "90%", height: 12, backgroundColor: "#5c0", borderRadius: 20 }} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#F5F4F4'
        >
          <ImageBackground source={HomeBg} style={{ width: "100%", height: RFValue(135, 580) }}>
            <View flexDirection="row" style={{ marginTop: RFValue(66, 580), marginLeft: 4 }}>
              <Avatar.Image
                size={RFValue(48, 580)}
                source={Robberson}
                style={{
                  margin: 12,
                  backgroundColor: 'rgba(52, 52, 52, 0)'
                }}
              />
              
              <View justifyContent="center">
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: RFValue(12, 580) }}>Cart !</Text>
                <Text style={{ color: "#ddd", fontSize: RFValue(12, 580) }}>a Provit Maker</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={{ padding: RFValue(12, 580) }}>
            <Text style={{ fontWeight: "bold", fontSize: RFValue(12, 580), color: "#3D5B9B" }}>
              My Stock
            </Text>
          </View>
          {stocks}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index
