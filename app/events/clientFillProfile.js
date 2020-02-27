const css = require('../../bot'),
  eventsRules = require('../auth/eventsRules'),
  cancelKeyboard = require('../keyboards/clientGoToMainKeyboard'),
  startKeyboard = require('../keyboards/startKeyboard'),
  clientFillProfileHelper = require('../helpers/clientFillProfileHelper');

// Request for Fill Profile
css.hears(eventsRules.regularMessage.clientFillProfile.value, async ctx => {
  ctx.session.fillProfile = true;
  return  ctx.reply(ctx.i18n.t('ReplyToFillProfileText'), cancelKeyboard(ctx));
});

// Filling profile
css.on('message', async (ctx, next) => {
  if (ctx.session.fillProfile) {
    const msg = await clientFillProfileHelper(ctx);
    return ctx.reply(msg, startKeyboard(ctx));
  }
  await next();
});
