import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner,
} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.onLoginSuccess())
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => this.onLoginFail());
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'large'} />;
    } else {
      return <Button
        text={'Log In'}
        onPress={this.onButtonPress.bind(this)}
        //or
        //onPress={() => this.onButtonPress}
             />;
    }
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@example.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
          {/*ChangeText={newtext => this.setState({ text: newtext })}
            can either use the syntax above or cleverly use the one below
          which utilises ES6*/}
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            secureTextEntry
            //or secureTextEntry={true}
            placeholder={'password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })} />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
