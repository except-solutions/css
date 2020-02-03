const css = require('../../bot'),
  Keyboard = require('telegraf-keyboard');
const startHelper = require('../helpers/startHelper');

const StartKeyboardOptions = {
  inline: false, // defaultaa
  duplicates: false, // default
  newline: true, // default
};

css.start(async ctx => {
  const keyboard = new Keyboard(StartKeyboardOptions);
  keyboard.add('123: 321');
  ctx.reply('Keyboard', keyboard.draw());

  startHelper.createClientIfNotExist(ctx);


});
