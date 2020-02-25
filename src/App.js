import React, { useRef, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

import { TextField } from 'react-native-material-textfield'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgXml } from 'react-native-svg'

import useItLogo from "./assets/images/LogoUseIt.svg"


const App = () => {
  const [username, setUsername] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const inputUsername = useRef(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.body}>
            <View style={styles.centerSvg}>
              <SvgXml width="200" height="200" xml={useItLogo} />
            </View>

            <View style={styles.inputField}>
              <TextField
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
              />

              <TextField
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
              />
            </View>

            <View>
              <View style={styles.makeItBtnContainer}>
                <TouchableOpacity
                  underlayColor="white"
                >
                  <View style={styles.makeItBtn}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={styles.centerText}
              onPress={() => console.log("register")}
            >
              I don't have account
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    borderWidth: 3,
    flex: 1
  },
  centerSvg: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerText: {
    flex: 1,
    marginTop: 12,
    color: "#3D5B9B",
    fontSize: RFValue(12, 580),
    textAlign: "center"
  },
  inputField: {
    flex: 1,
    marginHorizontal: 40
  },
  makeItBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: "#FFFFFF"
  },
  makeItBtnContainer: {
    flex: 1,
    height: RFValue(28, 580),
    width: RFValue(200, 580),
    borderRadius: 45,
    backgroundColor: "#3D5B9B",
    alignItems: 'center',
    marginTop: 16
  },
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1
  },
});

export default App;
