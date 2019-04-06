import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3300/api/register', this.state)
      .then(res => {
        this.props.history.push('/login');
      }).catch(err => {
        console.log(err);
      });
    
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            type="text"
          >
          </input>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            type="text"
          >
          </input>
          <button>Sign Up</button>
        </form> 
      </div>
    )
  }
}
