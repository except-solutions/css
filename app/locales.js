const TelegrafI18n = require('telegraf-i18n'),
  path = require('path');

module.exports = new TelegrafI18n({
  defaultLanguage: 'en',
  allowMissing: true,
  directory: path.resolve(__dirname, 'locales')
});
