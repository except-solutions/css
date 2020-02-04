const css = require('../../bot'),
  startHelper = require('../helpers/startHelper'),
  keyboard = require('../keyboards/startKeyboard');

css.start(async ctx => {
  await ctx.reply(ctx.i18n.t('greeting'), keyboard(ctx));

  await startHelper.createClientIfNotExist(ctx.chat);
});
