const cssbot = require('../bot');

// Add telegram events:
require('../app/events/addManager');
require('../app/events/addClient');

// Bot launched:
cssbot.launch();
