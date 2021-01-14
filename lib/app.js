const express = require('express');
const slackBot = require('slackbots');
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

app.post('/slackbot', (req, res) => {
  const myBot = new slackBot({
    token: 'xoxb-1643908662884-1637971199427-6bfrrXTKoTMqAx0hvLM7KYvR',
    name: 'test-bot'
  });

  myBot.on('start', () => {
    const params = {
      icon_emoji: ':cat:'
    };

    myBot.postMessageToChannel(
      'general',
      'Yo!',
      params
    );
  });
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
