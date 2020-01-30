const Manager = require('../models/manager');
const eventsRules = require('./eventsRules');

module.exports = {
  async messageTypeMiddleware(context, next) {
    if (context.message.text.startsWith('/')) {
      context.messageType = 'commands';
    } else {
      context.messageType = 'text';
    }
    await next();
  },
  async userAuthenticationMiddleware(context, next) {

    context.auth = false;

    if (await Manager.exists({telegramId: context.from.id})) {
      context.user = await Manager.findOne({telegramId: context.from.id});
    }

    await next();
  },
  async commandAuthMiddleware(context, next) {

    if (context.messageType !== 'command') {
      await next();
      return null;
    }

    if (eventsRules.hasPermission(context.messageType, context.message, context.message)) {
      await next();
      return null;
    }

    context.reply('You don\'t have privileges for this command');
  }
};
