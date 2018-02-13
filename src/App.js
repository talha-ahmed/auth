import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner,
 } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
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

    firebase.auth().onAuthStateChanged((user) => {
      let loggedIn = !!(user);
      this.setState({ loggedIn });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                text={'Log Out'}
                onPress={() => firebase.auth().signOut()}
              />
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View
            style={ {flex: 1} }>
            <Spinner />
          </View>);
    }
  }

  render() {
    return (
      <View style={ {flex: 1} }>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
