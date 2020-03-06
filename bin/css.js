const Telegraf = require('telegraf-sync'),
  cssbot = require('../bot'),
  i18n = require('../app/locales'),
  commandParts = require('telegraf-command-parts'),
  authMiddlewares = require('../app/auth/middlewares'),
  RedisSession = require('telegraf-session-redis');

const session = new RedisSession({
  store: {
    host: process.env.TELEGRAM_SESSION_HOST || '127.0.0.1',
    port: process.env.TELEGRAM_SESSION_PORT || 6379
  },
  property: 'session'
});

cssbot.use(session);
// Add middlewares:
cssbot.use(i18n.middleware());
cssbot.use(commandParts());
cssbot.use(authMiddlewares.messageTypeMiddleware);
cssbot.use(authMiddlewares.userAuthenticationMiddleware);
cssbot.use(authMiddlewares.typeAuthMiddleware);
cssbot.use(Telegraf.log());

// Add telegram events:
require('../app/events/addManager');
require('../app/events/addClient');
require('../app/events/registerGroup');
require('../app/events/startKeyboard');
require('../app/events/clientFillProfile');
require('../app/events/goToDialogueWithStaff');
require('../app/events/replyClient');
require('../app/events/clientSendMessage');

cssbot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

// Bot launched:
cssbot.launch({polling: {timeout: 1, stopCallback: () => console.log('long pools was stopped')}});
