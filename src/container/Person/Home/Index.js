import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ToastAndroid
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Avatar } from 'react-native-paper';

const Index = props => {
  const Cows = require('../../../assets/images/Category/Cows.png')
  const Robberson = require('../../../assets/images/Robberson.png')
  const HeaderBg = require('../../../assets/images/HeaderBg.png')
  const Sheeps = require('../../../assets/images/Category/Sheeps.png')

  const Organics = []
  const Categories = []

  for (let i = 0; i < 5; i++) {
    Organics.push(
      <View key={"Organic" + i} flexDirection="row">
        <TouchableOpacity
          key={"Organic"+i}
          onPress={() => ToastAndroid.show('Organic Selected!', ToastAndroid.SHORT)}
          style={{ marginBottom: 12, marginLeft: 12 }}
        >
          <View flexDirection="column" style={{ backgroundColor: "#fff", width: RFValue(152, 580), borderRadius: 20 }}>
            <View flexDirection="row" justifyContent="center" style={{ margin: 12 }}>
              <Image source={Cows} style={{ width: RFValue(124, 580), borderRadius: 20 }} />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 12, marginLeft: 12 }}>
                Cow Feces
              </Text>
            </View>
            <View
              flexDirection="row"
              style={{
                flex: 1,
                fontSize: 8,
                justifyContent: "space-between",
                paddingHorizontal: 12,
                marginBottom: 12
              }}
            >
              <Text>
                5 Company
              </Text>
              <View
                style={{
                  backgroundColor: "#FF0101",
                  opacity: 0.4,
                  width: RFValue(56, 580),
                  borderRadius: 20,
                  alignItems: "center"
                }}>
                <Text style={{ color: "black" }}>
                  $ 0.2
                  </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ToastAndroid.show('Organic Selected!', ToastAndroid.SHORT)}
          style={{ marginBottom: 12, marginLeft: 12 }}
        >
          <View flexDirection="column" style={{ backgroundColor: "#fff", width: RFValue(152, 580), borderRadius: 20 }}>
            <View flexDirection="row" justifyContent="center" style={{ margin: 12 }}>
              <Image source={Sheeps} style={{ width: RFValue(124, 580), borderRadius: 20 }} />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 12, marginLeft: 12 }}>
                Sheep Feces
              </Text>
            </View>
            <View
              flexDirection="row"
              style={{
                flex: 1,
                fontSize: 8,
                justifyContent: "space-between",
                paddingHorizontal: 12,
                marginBottom: 12
              }}
            >
              <Text>
                2 Company
              </Text>
              <View
                style={{
                  backgroundColor: "#FF0101",
                  opacity: 0.4,
                  width: RFValue(56, 580),
                  borderRadius: 20,
                  alignItems: "center"
                }}>
                <Text style={{ color: "black" }}>
                  $ 0.21
                  </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )

    Categories.push(
        <TouchableOpacity
          key={"category"+i}
          onPress={() => props.navigation.navigate("CategoryItems")}
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
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#F5F4F4'
        >
          <ImageBackground source={HeaderBg} style={{ width: "100%", height: RFValue(80, 580) }}>
            <View flexDirection="row">
              <Avatar.Image
                size={RFValue(48, 580)}
                source={Robberson}
                style={{
                  margin: 16,
                  backgroundColor: 'rgba(52, 52, 52, 0)'
                }}
              />

              <View justifyContent="center">
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: RFValue(12, 580) }}>Hello Robbenson !</Text>
                <Text style={{ color: "#ddd", fontSize: RFValue(12, 580) }}>a Provit Maker</Text>
              </View>
            </View>
          </ImageBackground>

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

          <View style={{ paddingHorizontal: RFValue(12, 580), paddingBottom: RFValue(12, 580) }}>
            <Text style={{ fontWeight: "bold", fontSize: RFValue(12, 580), color: "#3D5B9B" }}>
              It's Organic
            </Text>
          </View>

          <ScrollView horizontal={true}>
            {Organics}
          </ScrollView>

          <View
            flexDirection="row"
            style={{
              marginTop: 12,
              paddingHorizontal: RFValue(12, 580),
              paddingBottom: RFValue(12, 580),
              flex: 1,
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: RFValue(12, 580), color: "#3D5B9B" }}>
              Waste Category
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("CategoryAll")
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: RFValue(12, 580), color: "black" }}
              >
                See All
            </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} style={{marginBottom: 12}}>
            {Categories}
          </ScrollView>

        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index
