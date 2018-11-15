import React, { Component } from 'react';
import './LoginPage.css';
import API from '../utils/https';

class LoginPage extends Component {
  state = {
      username: "",
      password: "",
      email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form action="/secret/register" method="post">
          <h3>Username:</h3>
          <input className="input" name="username" type="text" onChange={this.handleInputChange} value={this.state.username}></input>
          <h3>Password:</h3>
          <input className="input" name="password" type="password" onChange={this.handleInputChange} value={this.state.password}></input>
          <h3>Email</h3>
          <input className="input" name="email" type="text" onChange={this.handleInputChange} value={this.state.email}></input>
          <input id="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default LoginPage;
