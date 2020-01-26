const css = require('../../css');

css.on('message', (msg) => {
  const chatId = msg.chat.id;
  css.sendMessage(chatId, 'Received your message');
});
