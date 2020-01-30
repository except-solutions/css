const cssbot = require('../bot');


// Bot launched:
const authMiddlewares = require('../app/auth/middlewares');

cssbot.use(authMiddlewares.messageTypeMiddleware);
cssbot.use(authMiddlewares.userAuthenticationMiddleware);
cssbot.use(authMiddlewares.commandAuthMiddleware);

// Add telegram events:
require('../app/events/addManager');
require('../app/events/addClient');
require('../app/events/registerGroup');
require('../app/events/startKeyboard');

cssbot.launch();
