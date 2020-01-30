const Group = require('../models/group');

module.exports = {
  async addGroup(groupData) {
    if (await Group.exists()) {
      return {success: false, message: 'Group already registred'};
    } else {
      return {
        success: true,
        message: 'Group success registred',
        group: await Group.create({chatId: groupData.id, title: groupData.title})
      };
    }
  },
};
