const Telegraf = require('telegraf'),
  cssbot = require('../bot'),
  i18n = require('../app/locales'),
  commandParts = require('telegraf-command-parts'),
  authMiddlewares = require('../app/auth/middlewares'),
  session = require('telegraf/session');

// Add middlewares:
cssbot.use(i18n.middleware());
cssbot.use(session());
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

// Bot launched:
cssbot.launch();
