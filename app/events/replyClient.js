const css = require('../../bot');
// const Group = require('../models/group');
const Client = require('../models/client');
const eventsRules = require('../auth/eventsRules');


css.command(eventsRules.commands.replyClient.value, async context => {
  const username = context.state.command.splitArgs[0].slice(1);
  const text = context.state.command.splitArgs.slice(1).join(' ')
  const client = await Client.findOne({username: username});

  context.telegram.sendMessage(client.telegramId, `Reply from manager: ${text}`);
});
