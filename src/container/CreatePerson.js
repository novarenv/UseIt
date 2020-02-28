import React, { useRef, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import { TextInput } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const { height } = Dimensions.get('window')

const Login = props => {
  const [username, setUsername] = useState('')
  const [errorUsername, setErrorUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [errorBirthDate, setErrorBirthDate] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [errorZipCode, setErrorZipCode] = useState('')

  const [date, setDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const dateRef = useRef(null)

  const Back = require('../assets/images/Back.png')

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          backgroundColor='#fff'
        >
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

          <View style={{ height: height, padding: RFValue(24, 580) }}>
            <View style={{ marginTop: 16, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#3D5B9B', fontSize: RFValue(32, 580) }}>Register</Text>
              <Text style={{ color: '#3D5B9B', fontSize: RFValue(16, 580) }}>Person</Text>
            </View>

            <View style={{ marginTop: RFValue(100, 580) }}>
              <TextInput
                maxLength={50}
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
                error={errorEmail}
                label="Email"
                fontSize={RFValue(14, 580)}
                labelFontSize={RFValue(11, 580)}
                autoCapitalize="none"
                value={email}
                onChangeText={val => {
                  setErrorEmail('');
                  setEmail(val);
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

              <TouchableWithoutFeedback
                onPress={() => {
                  setShowDatePicker(true);
                  dateRef.current.blur();
                }}>
                <View>
                  <View pointerEvents="none">
                    <TextInput
                      maxLength={50}
                      error={errorBirthDate}
                      label="Date of Birth"
                      fontSize={RFValue(14, 580)}
                      labelFontSize={RFValue(11, 580)}
                      autoCapitalize="none"
                      value={birthDate}
                      style={{ backgroundColor: '#fff' }}
                      ref={dateRef}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <DateTimePickerModal
                date={date}
                isVisible={showDatePicker}
                mode="date"
                onConfirm={date => {
                  setShowDatePicker(false)
                  setDate(date)
                  const day = date.getDate()
                  const month = date.getMonth()
                  const year = date.getFullYear()
                  const months = [
                    'JAN',
                    'FEB',
                    'MAR',
                    'APR',
                    'MEI',
                    'JUN',
                    'JUL',
                    'AGU',
                    'SEP',
                    'OKT',
                    'NOV',
                    'DES',
                  ]
                  const fulldateString = `${day}, ${months[month]} ${year}`
                  setBirthDate(`${day}/${month + 1}/${year}`)

                  dateRef.current.setValue(fulldateString)
                }}
                onCancel={() => {
                  setShowDatePicker(false);
                }}
              />

              <TextInput
                maxLength={50}
                error={errorZipCode}
                label="Zip Code"
                fontSize={RFValue(14, 580)}
                labelFontSize={RFValue(11, 580)}
                autoCapitalize="none"
                value={zipCode}
                onChangeText={val => {
                  setErrorZipCode('');
                  setZipCode(val);
                }}
                style={{ backgroundColor: '#fff' }}
              />
            </View>

            <TouchableOpacity
              style={{
                marginTop: 44, paddingVertical: RFValue(10, 580), backgroundColor: '#3D5B9B',
                borderRadius: 200, justifyContent: 'center', alignItems: 'center'
              }}
              onPress={() => props.navigation.pop()}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Let's Make it!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Login
