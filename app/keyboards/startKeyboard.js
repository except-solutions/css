const Keyboard = require('telegraf-keyboard'),
  keyboard = new Keyboard();
module.exports = (ctx) => {
  const formString = `${ctx.i18n.t('startKeyboardFirstButton')}`;
  return keyboard
    .add(formString)
    .draw();
};
