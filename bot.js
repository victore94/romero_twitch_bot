let jokes = require('./jokes')
let min = 60000

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

client.connect();

function onMessageHandler(target, context, msg, self) {

  if (self) { return; }
  const user = context.username
  const commandName = msg.trim();

  switch (commandName) {
    case '!hello':
      client.say(target, `Hello ${user} how are you today? Thanks for tuning into Ohwise1's stream!`)
      break;
    case '!specs':
      console.log(`* Executed ${commandName} command`);
      client.say(target, `GTX 2080 || 32GB RAM || 144fps 1440p Monitor || AMD Ryzen 7 2700X CPU`)
      console.log(`* Executed ${commandName} command`);
      break;
    case '!love':
      client.say(target, `GayPride BisexualPride `)
      break;
    case '!joke':
      let joke = jokes[Math.floor(Math.random() * jokes.length)];
      client.say(target, joke);
      break;
    default:
      console.log(`* Unknown command ${commandName}`);
  }
}


setInterval(() => {
  client.say('ohwise1', `If you're enjoying the stream don't forget to follow!`)
}, min * 10)

setInterval(() => {
  client.say('ohwise1',
    `Try some of these commands:
  _______________________________________
  !hello,
  !love,
  !specs,
  !joke
  _______________________________________
  `
  )
}, min * 5)

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
