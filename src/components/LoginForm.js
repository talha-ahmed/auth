import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            value={this.state.text}
            onChangeText={text => this.setState({ text })} />
            {/*ChangeText={newtext => this.setState({ text: newtext })}
            can either use the syntax above or cleverly use the one below
            which utilises ES6*/}
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button text={'Log in'} />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
