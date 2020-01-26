const TelegramBot = require('node-telegram-bot-api');

const css = new TelegramBot(
  process.env.TELEGRAM_TOKEN, 
  {
    polling: true,
    request: {
      proxy: process.env.PROXY_URI,
      strictSSL: false
    }
  }
);

module.exports = css;
