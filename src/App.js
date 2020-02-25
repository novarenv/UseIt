import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { TextField } from 'react-native-material-textfield';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

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
            <View style={styles.sectionContainer}>
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
              <Text
                onPress={() => console.log("register")}
              >
                I don't have account
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
