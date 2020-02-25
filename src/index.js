import React from 'react'
import { View, BackHandler, Alert } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './store/store'
import App from './App'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

class Root extends React.Component {
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    
    navigate('NewScreen');
  };

  handleBackButton = () => {
    Alert.alert(
      "Keluar Aplikasi",
      "Apakah anda yakin ingin keluar dari aplikasi?",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  componentDidMount() {
    FontAwesomeIcon.loadFont()

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
