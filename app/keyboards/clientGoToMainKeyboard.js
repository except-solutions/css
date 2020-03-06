const Keyboard = require('telegraf-keyboard');

module.exports = (ctx) => {
  return (new Keyboard())
    .add(ctx.i18n.t('CancelFillProfile'))
    .draw();
};
