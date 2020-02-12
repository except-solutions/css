const Keyboard = require('telegraf-keyboard');
const clientDialogKeyboard = new Keyboard({});

module.exports = ctx => clientDialogKeyboard
  .add(ctx.i18n.t('EndMessaging'))
  .draw();
