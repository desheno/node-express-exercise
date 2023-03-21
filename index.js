const express = require('express');
const axios = require('axios');

const app = express();

const API_URL = 'https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef';

app.get('/', async (req, res) => {
	res.send('Hello there!');
});

app.get('/show', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.get('/achievement', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const achievement = response.data[0].achievement;
    res.send(achievement);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.get('/greet', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const greeting = response.data[1].sayGreeting;
    res.send(greeting);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
