const css = require('../../bot');
const Group = require('../models/group');

css.on('message', async (ctx) => {
  if (ctx.messageType !== 'regularMessage') {
    return null;
  }

  if (ctx.message.chat.type === 'group') {
    return null;
  }

  if (ctx.session.dialogueProcessing !== true) {
    return null;
  }

  const managersGroup = await Group.getManagerGroup();
  await ctx.telegram.sendMessage(
    managersGroup.chatId,
    `Message from @${ctx.message.from.username}: ${ctx.message.text}`
  );
});
