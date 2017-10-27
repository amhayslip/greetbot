'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');

var GreetBot = function Constructor(settings) {
  this.settings = settings;
  this.settings.name = this.settings.name || 'greetbot';

  this.user = null;
};

GreetBot.prototype._loadBotUser = function () {
  var self = this;
  this.user = this.users.filter(function (user) {
      return user.name === self.name;
  })[0];
};

GreetBot.prototype._onStart = function () {
  this._loadBotUser();
};

GreetBot.prototype.run = function () {
  GreetBot.super_.call(this, this.settings);

  var self = this;

  this.on('start', this._onStart);

  this.on('message', function (event) {
    console.log(event);

    if (event.type === 'presence_change') {
      var userName = '<@' + event.user + '>'

      self.postMessageToChannel('test33', 'Hey ' + userName + ', welcome to Learn to Code RDU! Please do the following for us: \n 1. Introduce yourself by telling us what you`re currently learning and/or your goals \n 2. Be sure to fill out this form so we can know how best to help you: https://projectshift.typeform.com/to/hGWNnJ \n Thanks and happy coding! If you need anything feel free to messaage <@aaron>!');
    }
  });
};

util.inherits(GreetBot, Bot);

module.exports = GreetBot;
