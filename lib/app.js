const express = require('express');
const app = express();
require('dotenv').config();

const makeBot = require('../bot-script');


app.use(express.json());



const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_AUTH);




app.get('/', (req, res) => {
  res.send({ message: 'Hello!' });
});

app.post('/', (req, res, next) => {
  const userId = req.body.event.id;

  if(userId === 'U01JRUK5VCK') return;
  
  web
    .chat
    .postMessage({
      channel: 'general',
      text: req.body.event.text
    })
    .then(() => res.send({ message: 'message sent!' }))
    .catch(next);
});



app.post('/bots', (req, res) => {
  const { body: settings } = req;

  makeBot(settings);

  res.send({ message: 'Hi! Nothing broke... yet...' });
});

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
