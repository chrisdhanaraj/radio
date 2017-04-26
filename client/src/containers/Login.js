import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { setToken } from '../auth';
import config from '../config';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (evt, field) => {
    this.setState({
      [field]: evt.target.value,
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;

    fetch(`${config.api}/api/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setToken(data.user, data.token);
          browserHistory.push('/dashboard');
        }
      });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login internal-view">
        <h1 className="h1">Login</h1>

        <div className="login-form">
          <div className="form-group">
            <h2 className="h2">Email</h2>
            <input
              onChange={(evt) => {
                this.handleChange(evt, 'email');
              }}
              id="email"
              type="email"
              placeholder="email"
              value={email}
            />
          </div>

          <div className="form-group">
            <h2 className="h2">Password</h2>
            <input
              onChange={(evt) => {
                this.handleChange(evt, 'password');
              }}
              id="password"
              type="password"
              placeholder="password"
              value={password}
            />
          </div>

          <div className="form-group">
            <button
              onClick={this.handleSubmit}
              className="btn"
              id="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
