const cssbot = require('../bot');
const commandParts = require('telegraf-command-parts');

// Bot launched:
const authMiddlewares = require('../app/auth/middlewares');

 
cssbot.use(commandParts());
cssbot.use(authMiddlewares.messageTypeMiddleware);
cssbot.use(authMiddlewares.userAuthenticationMiddleware);
cssbot.use(authMiddlewares.commandAuthMiddleware);

// Add telegram events:

require('../app/events/addManager');
require('../app/events/addClient');
require('../app/events/registerGroup');
require('../app/events/startKeyboard');
require('../app/events/replyClient');
require('../app/events/clientSendMessage');


cssbot.launch();
