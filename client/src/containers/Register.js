import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    djName: '',
  };

  componentDidMount() {}

  handleChange = (evt, field) => {
    this.setState({
      [field]: evt.target.value,
    });
  };

  handleSubmit = () => {
    const { email, password, djName } = this.state;

    if (!this.validate()) {
      return;
    }

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: 'mutation ($data: DJInput!) { addDJ(data:$data)}',
        variables: {
          data: {
            email,
            password,
            djName,
          },
        },
      }),
    })
      .then(res => res.json())
      .then(data => {
        browserHistory.push('/login');
      });
  };

  validate = () => {
    return (
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.djName !== ''
    );
  };

  render() {
    const { email, password, djName } = this.state;

    return (
      <div className="register internal-view">
        <h1 className="h1">Create your Account</h1>

        <div className="register-form">
          <div className="form-group">
            <h2 className="h2">Email</h2>
            <input
              onChange={evt => {
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
              onChange={evt => {
                this.handleChange(evt, 'password');
              }}
              id="password"
              type="password"
              placeholder="password"
              value={password}
            />
          </div>

          <div className="form-group">
            <h2 className="h2">DJ Callsign</h2>
            <input
              onChange={evt => {
                this.handleChange(evt, 'djName');
              }}
              id="djName"
              placeholder="Maverick"
              type="text"
              value={djName}
            />
          </div>

          <div className="form-group">
            <button className="btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
