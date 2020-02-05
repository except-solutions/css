const Client = require('../models/client');

module.exports = async (ctx) => {
  let splitArgs,
    name,
    companyName,
    email,
    description;
  try {
    splitArgs = ctx.update.message.text.split('\n');
    name = splitArgs[0];
    companyName = splitArgs[1];
    email = splitArgs[2].trim();
    description = splitArgs[3];
  } catch (e) {
    return ctx.i18n.t('FailedFillProfile');
  }
  const clientDoc = await Client.findOne({telegramId: ctx.from.id});
  try{
    clientDoc.profile = {
      name: name,
      companyName: companyName,
      email: email,
      description: description
    };
    await clientDoc.save();
  } catch (e) {
    return ctx.i18n.t('FailedFillProfile');
  }
  ctx.session.fillProfile = false;
  return ctx.i18n.t('SuccessFillProfile');
};
