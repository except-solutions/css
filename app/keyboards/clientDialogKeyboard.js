const Keyboard = require('telegraf-keyboard');

module.exports = ctx => (new Keyboard)
  .add(ctx.i18n.t('EndMessaging'))
  .draw();
