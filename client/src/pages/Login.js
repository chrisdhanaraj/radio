import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Button, FloatingInput } from '../elements';
import { login, finishAuthentication } from '../utility/AuthService';

const { Div, H1 } = glamorous;

const LoginContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  minHeight: '100vh',
});

const LoginBox = glamorous.div({
  width: '215px',
});

const ErrorBox = glamorous.div({
  padding: '15px 0',
  fontSize: '14px',
  color: '#fff',
  textAlign: 'center',
});

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    login(email, password).then(result => {
      if (!result.token) {
        this.setState({
          errorMessage: 'Incorrect username or password',
        });
      } else {
        finishAuthentication(result.token);
        this.props.history.push('/dashboard');
      }
    });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
      errorMessage: '',
    });
  };

  render() {
    const { email, password, errorMessage } = this.state;

    return (
      <LoginContainer>
        <LoginBox>
          <H1 marginBottom="3rem">Login</H1>

          <form onSubmit={this.handleSubmit}>
            <FloatingInput
              required
              label="email"
              value={email}
              name="email"
              type="text"
              onChange={this.handleChange}
            />
            <FloatingInput
              required
              label="password"
              value={password}
              name="password"
              type="password"
              onChange={this.handleChange}
            />

            <Div textAlign="center">
              <Button type="submit" css={{ display: 'inline-block' }}>
                Submit
              </Button>
            </Div>

            {errorMessage !== '' &&
              <ErrorBox>
                <p>{errorMessage}</p>
              </ErrorBox>}
          </form>
        </LoginBox>
      </LoginContainer>
    );
  }
}
