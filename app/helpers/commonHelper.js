const _ = require('lodash');

module.exports = {
  addSignInMessage(message, signText) {
    if (_.has(message, 'photo')) {
      const originalCaption = _.has(message, 'caption') ? message.caption : '';
      return {...message, ...{caption: `${signText} ${originalCaption}`}};
    } else if (_.has(message, 'text')) {
      return {...message, ...{text: `${signText} ${message.text}`}};
    }
    return message;
  }
};
