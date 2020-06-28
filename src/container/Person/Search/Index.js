import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Menu, TextInput } from 'react-native-paper'

const Index = props => {
  const Back = require('../../../assets/images/Back.png')
  const HeaderBg = require('../../../assets/images/HeaderBg.png')

  const [categoryDd, setCategoryDd] = useState(false)
  const [errorWasteName, setErrorWasteName] = useState('')
  const [wasteName, setWasteName] = useState("")

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#F5F4F4'
        >
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
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: RFValue(18, 580) }}>Search</Text>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{
              paddingVertical: RFValue(10, 580),
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'black',
              height: 180,
              marginHorizontal: 32,
              marginVertical: 16
            }}
            onPress={() => props.navigation.navigate("Search")}
          >
            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', alignSelf: "center" }}>Search</Text>

            <View
              flexDirection="row"
              justifyContent="space-between"
              style={{ marginTop: 12, marginHorizontal: 32, alignItems: "center" }}
            >
              <Text>
                Category
              </Text>
              <View>
                <Menu
                  visible={categoryDd}
                  onDismiss={() => setCategoryDd(!categoryDd)}
                  anchor={
                    <View style={{ borderWidth: 1, borderRadius: 8, padding: 8, backgroundColor: "#eee" }}>
                      <Text title="showMenu" onPress={() => setCategoryDd(!categoryDd)}>Waste 1 V</Text>
                    </View>
                  }
                >
                  <Menu.Item onPress={() => setCategoryDd(!categoryDd)} title="Waste 1" />
                  <Menu.Item onPress={() => setCategoryDd(!categoryDd)} title="Waste 2" />
                </Menu>
              </View>
            </View>

            <TextInput
              maxLength={50}
              error={errorWasteName}
              label="Name of Waste"
              fontSize={RFValue(8, 580)}
              labelFontSize={RFValue(11, 580)}
              value={wasteName}
              onChangeText={val => {
                setErrorWasteName('');
                setWasteName(val);
              }}
              style={{ backgroundColor: '#fff', width: 300, alignSelf: "center" }}
            />
          </View>

          <TouchableOpacity
            onPress={() => ToastAndroid.show('Waste not found!', ToastAndroid.SHORT)}
            style={{
              alignSelf: "center",
              backgroundColor: "#3D5B9B",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#3D5B9B",
              padding: 8,
              width: 200
            }}
          >
            <Text style={{ alignSelf: "center", color: "#fff" }}>Search</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Index