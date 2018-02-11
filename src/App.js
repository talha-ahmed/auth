import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDpPUhUsf-s8HqzZ1ie3j_qqChMJRlOG7Y',
        authDomain: 'auth-e5e51.firebaseapp.com',
        databaseURL: 'https://auth-e5e51.firebaseio.com',
        projectId: 'auth-e5e51',
        storageBucket: 'auth-e5e51.appspot.com',
        messagingSenderId: '1002165075802',
      }
    );
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
