const mongoose = require('../../db');

module.exports = mongoose.model(
  'Manager',
  mongoose.Schema({
    telegramId: {
      type: Number,
      unique: true
    },
    username: String,
    firstName: String,
    lastName: String,
    approved: {
      type: Boolean,
      default: false
    },
  })
);
