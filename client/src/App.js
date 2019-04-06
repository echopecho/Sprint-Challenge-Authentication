import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './Login/login';
import Jokes from './Jokes/jokes';
import SignUp from './SignUp/signUp';


class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/jokes">Jokes</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/register">Sign Up</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route path="/jokes" component={Jokes} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
