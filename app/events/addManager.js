const css = require('../../bot');
const managerHelper = require('../helpers/addManagerHelper');
const eventsRules = require('../auth/eventsRules');

css.command(eventsRules.commands.addManager.value, async msg => {
  const creationResult = await managerHelper.createMananger(msg.from);
  await msg.reply(creationResult.message);
});
