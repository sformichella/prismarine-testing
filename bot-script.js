const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;

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
    mineflayerViewer(bot, { firstPerson: true, port: 3001 });
  });
};
