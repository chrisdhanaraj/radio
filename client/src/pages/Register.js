import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import glamorous from 'glamorous';
import { signup, finishAuthentication } from '../utility/AuthService';
import { Button, FloatingInput, Row, Col, CenteredDiv } from '../elements';

const { Div, Svg } = glamorous;

const ConfirmIcon = glamorous.svg(props => ({
  position: 'absolute',
  top: 0,
  right: '12px',
  height: '12px',
  width: '12px',
  fill: props.invalid ? 'red' : 'green',
}));

export default class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    djName: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleEmail = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const {
      disabled,
      firstName,
      lastName,
      email,
      password,
      djName,
    } = this.state;

    const { history } = this.props;

    if (!disabled) {
      signup({
        dj: true,
        djName,
        firstName,
        lastName,
        email,
        password,
      }).then(result => {
        if (result.success) {
          finishAuthentication(result.token);
          const token = jwtDecode(result.token);
          if (token.dj) {
            history.push('/dashboard');
          }
        }
      });
    }
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      passwordConfirm,
      djName,
    } = this.state;

    return (
      <CenteredDiv css={{ height: '100vh' }}>
        <Div width="500px">
          <h1 className="h1" style={{ marginBottom: '2rem' }}>REGISTER</h1>

          <div className="register-form">
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <FloatingInput
                    label="First Name"
                    required
                    type="text"
                    value={firstName}
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <FloatingInput
                    label="Last Name"
                    required
                    type="text"
                    value={lastName}
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingInput
                    required
                    label="Email"
                    type="text"
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <FloatingInput
                    required
                    label="DJ Name"
                    type="text"
                    value={djName}
                    name="djName"
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingInput
                    required
                    label="Password"
                    type="password"
                    value={password}
                    name="password"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col css={{ position: 'relative' }}>
                  <FloatingInput
                    required
                    label="Confirm Password"
                    type="password"
                    value={passwordConfirm}
                    name="passwordConfirm"
                    onChange={this.handleChange}
                  />
                  {passwordConfirm !== ''
                    ? password === passwordConfirm
                        ? <ConfirmIcon viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </ConfirmIcon>
                        : <ConfirmIcon viewBox="0 0 24 24" invalid>
                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </ConfirmIcon>
                    : null}
                </Col>
              </Row>
              <Button>SIGN UP</Button>
            </form>
          </div>
        </Div>
      </CenteredDiv>
    );
  }
}
