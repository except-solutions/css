const Manager = require('../models/manager');

module.exports = {
  async createMananger(managerData, i18n) {

    const manager = await Manager.findOne({telegramId: managerData.id});

    if (manager) {
      if (manager.approved) {
        return {success: false, message: i18n.t('AlreadyRegistered')};
      }
      return {success: false, message: i18n.t('AlreadyRequestReg')};
    }

    const newManager = await Manager.create(
      {
        telegramId: managerData.id,
        firstName: managerData.first_name,
        lastName: managerData.last_name,
        username: managerData.username
      }
    );

    if (newManager) {
      return {
        success: true,
        message: i18n.t('ManagerRegAccepted')
      };
    }

    return {
      success: false,
      message: i18n.t('ManagerCreateError')
    };
  }
};
