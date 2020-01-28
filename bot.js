require('dotenv').config();
const Telegraf = require('telegraf');
const HttpsProxyAgent = require('https-proxy-agent');
const cssbot = new Telegraf(process.env.TELEGRAM_TOKEN, {
  telegram: {
    agent: new HttpsProxyAgent(process.env.PROXY_URI)
  }
});
module.exports = cssbot;
