import React from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
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
      <TouchableOpacity
        key={"category" + i}
        onPress={() => console.log("CategoryItems")}
        style={{ marginLeft: 12 }}
      >
        <ImageBackground
          source={Sheeps}
          style={{
            width: RFValue(152, 580),
            height: RFValue(220, 580),
            justifyContent: "flex-end",
            padding: 16
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Farm (Animal)
        </Text>
        </ImageBackground>
      </TouchableOpacity>
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
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: RFValue(18, 580) }}>PT. Widodo Makmur</Text>
              <Text style={{ color: "#fff", fontSize: RFValue(18, 580) }}>Klaten, Jawa Tengah</Text>
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
            <Image ></Image>
          </TouchableOpacity>

          <Text style={{ fontWeight: "bold", marginLeft: 12, marginBottom: 12 }}>Others Also Buy in this Company</Text>

          <ScrollView horizontal={true}>
            {Categories}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index
