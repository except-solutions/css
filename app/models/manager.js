const mongoose = require('../../db');
const telegramSchema = require('./telegram');

module.exports = mongoose.model(
  'Manager',
  mongoose.Schema({
    ...telegramSchema,
    ...{
      approved: {
        type: Boolean,
        default: false
      },
    }
  })
);
