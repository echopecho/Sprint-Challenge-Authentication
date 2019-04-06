import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import Login from './Login/login';
import Jokes from './Jokes/jokes';
import SignUp from './SignUp/signUp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/jokes">Jokes</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/register">Sign Up</NavLink>
        </header>
        <main>
          <Route path="/jokes" component={Jokes} />
          <Route path="/login" component={Login} />
          {/* <Route path="/signup" component={SignUp} /> */}
        </main>
      </div>
    );
  }
}

export default App;
