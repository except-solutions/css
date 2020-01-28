const css = require('../../bot');

const addClientHelper = require('../helpers/addClientHelper');

css.command('i_am_client', async (msg) => {
  const creationResult = await addClientHelper.createClient(msg.from);
  await msg.reply(creationResult.message);
});
