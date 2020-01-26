const css = require('../../css');

css.onText(/\/add_manager (.+)/, async msg => {
  const chatId = msg.chatId;
  css.sendMessage(chatId, 'Received your message');
});
