const Manager = require('../models/manager');
const eventsRules = require('./eventsRules');
module.exports = {
  async messageTypeMiddleware(ctx, next) {
    if (ctx.message && ctx.message.text) {
      if (ctx.message.text.startsWith('/')) {
        ctx.messageType = 'commands';
      } else {
        ctx.messageType = 'regularMessage';
      }
    } else {
      ctx.messageType = 'regularMessage';
    }
    await next();
  },
  async userAuthenticationMiddleware(ctx, next) {

    ctx.auth = false;

    if (await Manager.exists({telegramId: ctx.from.id})) {
      ctx.user = await Manager.findOne({telegramId: ctx.from.id});
      ctx.auth = true;
    }

    await next();
  },
  async typeAuthMiddleware(ctx, next) {

    let hasPerm;
    let msgType;
    if (ctx.messageType === 'commands') {
      msgType = ctx.state.command.command;
    } else {
      msgType = ctx.update.message.text;
    }
    try {
      hasPerm = eventsRules.hasPermission(
        ctx.messageType,
        msgType,
        ctx.user
      );
    } catch (error) {
      ctx.reply(error.message);
    }

    if (hasPerm) {
      await next();
      return null;
    }

    ctx.reply('You don\'t have privileges for this command');
  }
};
