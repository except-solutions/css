const _ = require('lodash');
const css = require('../../bot');
const eventsRules = require('../auth/eventsRules');
const Client = require('../models/client');
const replyHelper = require('../helpers/replyClientHelper');
const clientDialogKeyboard = require('../keyboards/clientDialogKeyboard');
const Keyboard = require('telegraf-keyboard');

css.command(eventsRules.commands.replyClient.value, async ctx => {

  const username = _.first(replyHelper.prepareReplyData(ctx.state.command));

  if (!await replyHelper.clientExist({username: username})) {
    await ctx.reply(`Client with username ${username} does not exist`);
  } else {
    const client = await Client.findOne({username: username});
    ctx.session.dailogueWithCient = {
      chatId: client.telegramId,
      clientUsername: client.username
    };
    await ctx.reply(
      replyHelper.prepareStartMessagingNotice(ctx, username),
      clientDialogKeyboard(ctx)
    );
  }
});

css.hears(eventsRules.regularMessage.EndMessaging.value, async (ctx) => {
  const endMessagingNotice = replyHelper.prepareEndMessagingNotice(
    ctx,
    ctx.session.dailogueWithCient.clientUsername
  );
  ctx.session.dailogueWithCient = false;
  await ctx.reply(endMessagingNotice, (new Keyboard()).clear());
});

css.on('message', async (ctx, next) => {
  if (ctx.session.dailogueWithCient && !eventsRules.isSpecialMessage(ctx.message)) {
    await ctx.telegram.sendCopy(ctx.session.dailogueWithCient.chatId, ctx.message);
  }
  await next();
});
