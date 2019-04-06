import React, { Component } from 'react';
import axios from 'axios';

export default class Jokes extends Component {
  state = {
    jokes: []
  }

  componentDidMount() {
    const headers = { authorization: localStorage.getItem('jwt') };

    axios.get('http://localhost:3300/api/jokes', { headers })
      .then(res => {
        this.setState({ jokes: res.data });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => (
          <div key={joke.id}>{joke.joke}</div>
        ))}
      </div>
    )
  }
}
