const _ = require('lodash'),
  translateEventsArray = require('./utils'),
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
    start: {
      value: ['start'],
      permissions: ['all']
    }
  },
  regularMessage: {
    // Special Event:
    userReplyEvent: {
      value: ['reply'],
      permissions: ['all']
    },
    // FillProfile Events:
    clientFillProfile: {
      value: translateEventsArray(i18n, 'FillProfileButton'),
      permissions: ['all']
    },
    clientCancelFillProfile: {
      value: translateEventsArray(i18n, 'CancelFillProfile'),
      permissions: ['all']
    },
    // Dialog Events:
    GoToDialogueWithManagersGroup: {
      value: translateEventsArray(i18n, 'GoToDialogueWithManagersGroup'),
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
    } else {
      return this.regularMessage.userReplyEvent;
    }
  }
};
