const Keyboard = require('telegraf-keyboard');

module.exports = ctx => (new Keyboard)
  .clientDialogKeyboard
  .add(ctx.i18n.t('EndMessaging'))
  .draw();
