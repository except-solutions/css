const Client = require('../../models/client');

module.exports = {
  resource: Client,
  options: {
    actions: {
      clientsCount: {
        actionType: 'record',
        isVisible: true,
        handler: async () => {
          return JSON.stringify(await Client.countDocuments());
        }
      }
    },
  }
};
