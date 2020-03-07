const Client = require('../models/client');

module.exports = {
  async createClient(clientData) {

    const result = await Client.exists({telegramId: clientData.id});

    if (result) {
      return {success: false, message: 'Your already requested registration.'};
    }

    const newClient = await Client.create(
      {
        telegramId: clientData.id,
        firstName: clientData.first_name,
        lastName: clientData.last_name,
        username: clientData.username
      }
    );

    if (newClient) {
      return {
        success: true,
        message: `
        Your request is accepted. When your request is approved you will recive notification
        `
      };
    }

    return {
      success: false,
      message: 'Something went wrong, client was not created.'
    };
  }
};
