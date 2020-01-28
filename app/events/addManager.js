const css = require('../../css');

const managerHelper = require('../helpers/addManagerHelper');

css.command('i_am_manager', async (msg) => {
  const creationResult = await managerHelper.createMananger(msg.from);
  await msg.reply(creationResult.message);
});
