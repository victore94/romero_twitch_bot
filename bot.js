
//=============================================
const tmi = require('tmi.js');
require('dotenv').config();

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};


const client = new tmi.client(opts);


client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

const channelName = process.env.CHANNEL_NAME

client.connect();


function onMessageHandler(target, context, msg, self) {
  console.log(target)
  console.log(context)
  console.log(msg)
  console.log(self)
  if (self) { return; }

  const commandName = msg.trim();

  switch (commandName) {
    case '!game':
      client.action(channelName, `Hi @${user['display-name']}, Ohwise1 is playing Fortnite!`)
      break;
    case '!specs':
      client.action(channelName, `GTX 2080 || 16GB RAM || 144fps 1440p Monitor`)
      break;
    case '!love':
      client.action(channelName, `BisexualPride BisexualPride BisexualPride BisexualPride`)
      break;
    default:
      console.log(`* Unknown command ${commandName}`);
  }
}




// client.on('chat', (channel, user, msg, self) => {
//   const commandName = msg.trim();
//   if (self) return;
//   if (commandName === '!user') {
//     client.say('ohwise', `@${user['display-name']} Hello`)
//   }
// })



setInterval(() => {
  client.say('ohwise1', 'If you are enjoying the steam dont forget to leave a follow!')
}, 60000)


function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  client.action('ohwise1', 'Hello, ohwise1_bot is now connected')

}
      // const tmi = require('tmi.js')

      // const options = {
      //   options: {
      //     debug: true,
      //   },
      //   connection: {
      //     cluster: 'aws',
      //     reconnect: 'true'
      //   },
      //   identity: {
      //     username: 'ohwise1_bot',
      //     password: 'oauth:m3k4xepefbcifojwpebwbjws3m1jx8'
      //   },
      //   channel: ['ohwise1']
      // }
      // const client = new tmi.client(options)

      // client.connect()

      // client.on('connected', (address, port) => {
      //   client.action('ohwise1', 'Hello, ohwise1_bot is now connected')
      // });

      // client.on('chat', (channel, user, message, self) => {
      //   if (message === '!game') {
      //     console.log(channel)
      //     console.log(user)
      //     console.log(self)
      //     client.action('ohwise1', 'testing test test')
      //   }
      // });


      // client.on('chat', (channel, user, message, self) => {
      //   if (message === '!game') {
      //     client.action('ohwise1', 'ohwise1 is playing fortnite')
      //   }
      // })
