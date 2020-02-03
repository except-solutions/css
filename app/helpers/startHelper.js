const Client = require('../models/client');

module.exports = {
  async createClientIfNotExist(context) {
    if (await this.isClientFirstRequest(context)) {
      return this.createClient(context.chat);
    }
  },
  async isClientFirstRequest(context) {
    return context.chat.type === 'private' && 
      !await Client.exists({telegramId: context.chat.id});
  },
  async createClient(chatData) {
    return await Client.create({
      telegramId: chatData.id,
      firstName: chatData.first_name,
      latName: chatData.last_name,
      username: chatData.username
    });
  },
};
