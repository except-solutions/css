const Telegraf = require('telegraf'),
  cssbot = require('../bot'),
  i18n = require('../app/locales'),
  commandParts = require('telegraf-command-parts'),
  authMiddlewares = require('../app/auth/middlewares');

// Add middlewares:
cssbot.use(i18n.middleware());
cssbot.use(commandParts());
cssbot.use(authMiddlewares.userAuthenticationMiddleware);
cssbot.use(authMiddlewares.commandAuthMiddleware);
cssbot.use(authMiddlewares.messageTypeMiddleware);
cssbot.use(Telegraf.log());

// Add telegram events:
require('../app/events/addManager');
require('../app/events/addClient');
require('../app/events/registerGroup');
require('../app/events/startKeyboard');
require('../app/events/clientFillProfile');
require('../app/events/replyClient');
require('../app/events/clientSendMessage');

// Bot launched:
cssbot.launch();
