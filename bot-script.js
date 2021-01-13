const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;
require('dotenv').config();

module.exports = settings => {
  const bot =  mineflayer.createBot({
    host: settings.serverAddress, // optional
    port: settings.serverPort,       // optional
    username: settings.username, // email and password are required only for
    password: '',          // online-mode=true servers
    version: false,                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
    auth: 'mojang'      // optional; by default uses mojang, if using a microsoft account, set to 'microsoft'
  });

  bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3001 });
  });
};

// const bot = mineflayer.createBot({
//   host: 'localhost', // optional
//   port: 25566,       // optional
//   username: 'asdads', // email and password are required only for
//   password: '',          // online-mode=true servers
//   version: false,                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
//   auth: 'mojang'      // optional; by default uses mojang, if using a microsoft account, set to 'microsoft'
// });

// bot.on('spawn', () => {

//   bot.chat('What\'s up diggity dog?');
// });

// bot.on('chat', (username, message) => {

//   console.log('Hi!');

//   if(username === bot.username) return;
//   bot.chat(message);
// });

// bot.on('move', (username, data) => {
//   console.log(data, username);
// });

// bot.on('death', (username) => {
//   bot.chat(`Oh no! ${username} died!`);
// });

// // Log errors and kick reasons:
// bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn));
// bot.on('error', err => console.log(err));
