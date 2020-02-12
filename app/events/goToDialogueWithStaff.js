const css = require('../../bot'),
  cancelKeyboard = require('../keyboards/clientGoToMainKeyboard'),
  eventsRules = require('../auth/eventsRules');

css.hears(eventsRules.regularMessage.GoToDialogueWithManagersGroup.value, async ctx => {
  ctx.session.dialogueProcessing = true;
  return ctx.reply(ctx.i18n.t('WarningClientAboutForwardingMsg'), cancelKeyboard(ctx));
});
