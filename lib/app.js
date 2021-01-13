const express = require('express');
const app = express();

const makeBot = require('../bot-script');

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ message: 'Hello!' });
});

app.post('/bots', (req, res) => {
  const { body: settings } = req;

  makeBot(settings);

  res.send({ message: 'Hi! Nothing broke... yet...' });
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
