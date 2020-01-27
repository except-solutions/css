const Manager = require('../models/manager');

module.exports = {
  async createMananger(managerData) {

    const result = await Manager.exists({telegramId: managerData.id});

    if (result) {
      return {success: false, message: 'Your already requested registration.'};
    }

    const newManager = await Manager.create(
      {
        telegramId: managerData.id,
        firstName: managerData.first_name,
        latName: managerData.last_name,
        username: managerData.username
      }
    );

    if (newManager) {
      return {
        success: true,
        message: `
        Your request is accepted. When your request is approved you will recive notification
        `
      };
    }

    return {
      success: false,
      message: 'Something went wrong, manager was not created.'
    };
  }
};
