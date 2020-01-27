const css = require('../../css');

const managerHelper = require('../helpers/addManagerHelper');

css.onText(/\/i_am_manager/, async msg => {
  const creationResult = await managerHelper.createMananger(msg.from);
  css.sendMessage(msg.chat.id, creationResult.message);
});
