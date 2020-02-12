const Keyboard = require('telegraf-keyboard'),
  keyboard = new Keyboard({
    newline: false
  });

module.exports = (ctx) => {
  return keyboard
    .add(ctx.i18n.t('FillProfileButton'))
    .add(ctx.i18n.t('GoToDialogueWithManagersGroup'))
    .draw();
};
