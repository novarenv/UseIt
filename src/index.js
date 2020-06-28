import React from 'react'
import { BackHandler, Alert } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider as PaperProvider } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import AuthNav from './AuthNav'
import { persistor, store } from './store/store'

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
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <AuthNav />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
