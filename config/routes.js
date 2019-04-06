const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');
const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  const user = req.body;

  if(user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    try {
      const newUser = await db('users').insert(user);
      res.status(201).json(newUser);
    } catch(e) {
      res.status(500).json({err: "Something went wrong with the server."})
    }
  } else {
    res.status(400).json({err: "Please input username and password"})
  }
}

async function login(req, res) {
  // implement user login
  const { username, password } = req.body;

  if(username && password) {
    const user = await db('users').where({username}).first();
    if(user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({message: `Welcome ${username}. You are now logged in`})
    } else {
      res.status(401).json({err: "Invalid credentials"})
    }
  } else {
    res.status(400).json({err: "Please input username and password."})
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
