const css = require('../../bot');
const managerHelper = require('../helpers/addManagerHelper');
const eventsRules = require('../auth/eventsRules');

css.command(eventsRules.commands.addManager.value, async ctx => {
  const creationResult = await managerHelper.createMananger(ctx.from, ctx.i18n);
  await ctx.reply(creationResult.message);
});
