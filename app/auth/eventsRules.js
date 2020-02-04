const _ = require('lodash'),
  i18n = require('../locales');

module.exports = {
  commands: {
    addManager: {
      value: ['i_am_manager'],
      permissions: ['all']
    },
    registerGroup: {
      value: ['its_manager_group'],
      permissions: ['manager']
    },
    replyClient: {
      value: ['reply'],
      permissions: ['all']
    },
    clientFillProfile: {
      value: Object
        .keys(i18n.repository)
        .map(Key => i18n.repository[Key].startKeyboardFirstButton()),
      permissions: ['all']
    },
    start: {
      value: ['start'],
      permissions: ['all']
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
    const rulesKeys = Object
      .keys(rulesTypes)
      .map(key => rulesTypes[key])
      .filter(item => item.value.includes(message));
 
    if (!_.isEmpty(rulesKeys)) {
      return _.first(rulesKeys);
    }

    throw Error(`Not found rule for given message ${message}`);
  }
};
