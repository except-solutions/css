const Client = require('../models/client');

module.exports = {
  async createClientIfNotExist(chat) {
    if (await this.isClientFirstRequest(chat)) {
      return this.createClient(chat);
    }
  },
  async isClientFirstRequest(chat) {
    return chat.type === 'private' && 
      !await Client.exists({telegramId: chat.id});
  },
  async createClient(chat) {
    return await Client.create({
      telegramId: chat.id,
      firstName: chat.first_name,
      lastName: chat.last_name,
      username: chat.username
    });
  },
};
