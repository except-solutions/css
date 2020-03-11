const mongoose = require('../../db');
const emailType = require('mongoose-type-email');
const adminUserTypes = require('../constants').adminUserLevels;

const profileSchema = mongoose.Schema({
  email: {
    type: emailType,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    enum: Object.values(adminUserTypes),
    default: adminUserTypes['manager']
  }
});

module.exports = mongoose.model(
  'AdminUser',
  profileSchema
);
