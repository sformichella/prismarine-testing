const express = require('express');
const botScript = require('../bot-script');
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



const { WebClient } = require('@slack/web-api');
const web = new WebClient('xoxb-1643908662884-1637971199427-S6qP6742JmX7U3cMQPolj6QM');

app.post('/slack', (req, res, next) => {
  const { text } = req.body;

  web
    .chat
    .postMessage({
      channel: 'general',
      text
    })
    .then(() => res.send({ message: 'message sent!' }))
    .catch(next);
});




app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
