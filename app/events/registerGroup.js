const css = require('../../bot');
const addManagerGroupHelper = require('../helpers/addManagerGroupHelper');
const eventsRules = require('../auth/eventsRules');

css.command(eventsRules.commands.registerGroup.value, async msg => {
  const result = await addManagerGroupHelper.addGroup(msg.chat);
  await msg.reply(result.message);
});
