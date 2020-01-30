const css = require('../../bot'),
  Keyboard = require('telegraf-keyboard');

const StartKeyboardOptions = {
  inline: false, // default
  duplicates: false, // default
  newline: true, // default
};

css.start((ctx) => {
  const keyboard = new Keyboard(StartKeyboardOptions);
  keyboard.add('123: 321');
  ctx.reply('Keyboard', keyboard.draw());
});
