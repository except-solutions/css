const _ = require('lodash');

module.exports = {
  commands: {
    addManager: {
      value: 'i_am_manager',
      permissions: ['all']
    },
    registerGroup: {
      value: 'its_manager_group',
      permissions: ['manager']
    }
  },
  hasPermission(type, message, user) {
    const rule = this.findByMessage(type, message);

    if (_.includes(rule.permissions, 'all')) {
      return true;
    }

    if (_.includes(rule.permissions, user.getType())) {
      return true;
    }

    return false;
  },
  findByMessage(type, message) {
    const rulesTypes = this[type];
    const rulesKeys = Object.keys(rulesTypes)
      .filter(key => rulesTypes[key].value === message);
    if (rulesKeys) {
      return rulesTypes[_.first(rulesKeys)];
    }

    throw Error(`Not found rule for given message ${message}`);
  }
};
