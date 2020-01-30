require('dotenv').config();

const Telegraf = require('telegraf');
const proxyAgent = require('./scripts/proxy');
const cssbot = new Telegraf(process.env.TELEGRAM_TOKEN, {
  telegram: {
    agent: proxyAgent()
  }
});

module.exports = cssbot;
