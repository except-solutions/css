const Keyboard = require('telegraf-keyboard');

module.exports = (ctx) => {
  return (new Keyboard())
    .add(ctx.i18n.t('FillProfileButton'))
    .add(ctx.i18n.t('GoToDialogueWithManagersGroup'))
    .draw();
};
