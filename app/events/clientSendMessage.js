const commonHelper = require('../helpers/commonHelper');

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
  const replyText = `${ctx.i18n.t('MessagesFromUsername')} @${ctx.message.from.username}`;

  await ctx.telegram.sendCopy(
    managersGroup.chatId,
    commonHelper.addSignInMessage(ctx.message, replyText),
  );
});
