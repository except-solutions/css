const css = require('../../bot');
const Group = require('../models/group');

css.on('message', async (context) => {
  if (context.messageType !== 'regularMessage') {
    return null;
  }

  if (context.message.chat.type === 'group') {
    return null;
  }

  const managersGroup = await Group.getManagerGroup();
  context.telegram.sendMessage(
    managersGroup.chatId,
    `Message from @${context.message.from.username}: ${context.message.text}`
  );
});
