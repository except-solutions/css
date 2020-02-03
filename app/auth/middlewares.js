const Manager = require('../models/manager');
const eventsRules = require('./eventsRules');

module.exports = {
  async messageTypeMiddleware(context, next) {
    if (context.message && context.message.text) {
      if (context.message.text.startsWith('/')) {
        context.messageType = 'commands';
      } else {
        context.messageType = 'regularMessage';
      }
    }
    await next();
  },
  async userAuthenticationMiddleware(context, next) {

    context.auth = false;

    if (await Manager.exists({telegramId: context.from.id})) {
      context.user = await Manager.findOne({telegramId: context.from.id});
      context.auth = true;
    }

    await next();
  },
  async commandAuthMiddleware(context, next) {

    if (context.messageType !== 'commands') {
      await next();
      return null;
    }

    let hasPerm;

    try {
      hasPerm = eventsRules.hasPermission(
        context.messageType,
        context.state.command.command,
        context.user
      );
    } catch (error) {
      context.reply(error.message);
    }

    if (hasPerm) {
      await next();
      return null;
    }

    context.reply('You don\'t have privileges for this command');
  }
};
