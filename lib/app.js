const express = require('express');
const app = express();


const makeBot = require('../bot-script');

app.use(express.json());

app.post('/bots', (req, res) => {
  const { body: settings } = req;

  makeBot(settings);

  res.send(req);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
