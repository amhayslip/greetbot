'use strict';

var GreetBot = require('../lib/greetbot');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var greetbot = new GreetBot({
  token: token,
  name: name
});

greetbot.run();
