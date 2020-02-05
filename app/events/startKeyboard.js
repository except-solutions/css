const css = require('../../bot'),
  startHelper = require('../helpers/startHelper'),
  eventsRules = require('../auth/eventsRules'),
  keyboard = require('../keyboards/startKeyboard');

css.start(async ctx => {
  await ctx.reply(ctx.i18n.t('greeting'), keyboard(ctx));
  await startHelper.createClientIfNotExist(ctx.chat);
});

css.hears(eventsRules.regularMessage.clientCancelFillProfile.value, async ctx => {
  Object.keys(ctx.session).map(key => ctx.session[key] = false);
  return  ctx.reply(ctx.i18n.t('greeting'), keyboard(ctx));
});
