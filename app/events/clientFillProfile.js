const css = require('../../bot'),
  eventsRules = require('../auth/eventsRules');

css.hears(eventsRules.commands.clientFillProfile.value, async ctx => {
  await ctx.reply('fuck you ');
});
