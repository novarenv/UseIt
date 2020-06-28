import React from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

const Index = props => {
  const Back = require('../../../assets/images/Back.png')
  const HeaderBg = require('../../../assets/images/HeaderBg.png')
  const Sheeps = require('../../../assets/images/Category/Sheeps.png')

  const Categories = []

  for (let i = 0; i < 5; i++) {
    Categories.push(
      <View key={"Categori" + i} flexDirection="row" justifyContent="center">
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ItemSeller")}
          style={{ alignItems: "center", marginBottom: 12, width: 400 }}
        >
          <View flexDirection="row" style={{ backgroundColor: "#fff", marginHorizontal: RFValue(12, 580), height: 120, borderRadius: 20 }}>
            <View flexDirection="column" justifyContent="center" style={{ margin: 12 }}>
              <Image source={Sheeps} style={{ width: 80, height: 80, borderRadius: 20 }} />
            </View>
            <View style={{ marginVertical: 12, flex: 1, marginRight: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sheep Feces
              </Text>

              <Text style={{ color: "#aaa" }}>
                2 Company
              </Text>

              <View flexDirection="row" justifyContent="space-between" style={{ marginTop: 16, marginBottom: 4 }}>
                <Text>
                  Available
                </Text>
                <Text style={{ color: "#aaa" }}>
                  4.8 Ton(Total)
                </Text>
              </View>
              <View flexDirection="row" alignItems="center" justifyContent="space-between" style={{ marginBottom: 16 }}>
                <Text>
                  Start from
                </Text>
                <View style={{ paddingHorizontal: 12, height: 20, backgroundColor: "#F2E201", borderRadius: 20 }}>
                  <Text>
                    $ 0.5 / Kg
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={HeaderBg} style={{ width: "100%", height: RFValue(60, 580), justifyContent: "center" }}>
          <View flexDirection="row">
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

            <View justifyContent="center">
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: RFValue(18, 580) }}>Farm (Animal)</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#F5F4F4'
        >
          <TouchableOpacity
            style={{
              paddingVertical: RFValue(10, 580),
              backgroundColor: '#FFFFFF',
              borderRadius: 200,
              borderWidth: 1,
              borderColor: 'black',
              margin: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate("Search")}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Search !</Text>
          </TouchableOpacity>

          <ScrollView>
            {Categories}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index
