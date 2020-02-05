const Keyboard = require('telegraf-keyboard'),
  keyboard = new Keyboard({});
module.exports = (ctx) => {
  return keyboard
    .add(ctx.i18n.t('CancelFillProfile'))
    .draw();
};
