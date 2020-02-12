const css = require('../../bot');
const eventsRules = require('../auth/eventsRules');
const Client = require('../models/client');
const replyHelper = require('../helpers/replyClientHelper');

css.command(eventsRules.commands.replyClient.value, async context => {

  const [username, message] = replyHelper.prepareReplyData(context.state.command);

  if (!await replyHelper.clientExist({username: username})) {
    context.reply(`Client with username ${username} does not exist`);
  } else {
    const client = await Client.findOne({username: username});
    await context.telegram.sendMessage(client.telegramId, `Reply from manager: ${message}`);
  }
});
