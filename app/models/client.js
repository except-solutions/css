const mongoose = require('../../db'),
  telegramSchema = require('./telegram');
require('mongoose-type-email');

const profileSchema = mongoose.Schema({
  name: String,
  companyName: String,
  email: mongoose.SchemaTypes.Email,
  description: String
});

module.exports = mongoose.model(
  'Client',
  mongoose.Schema({
    ...telegramSchema,
    ...{
      companyName: String,
      profile: profileSchema
    }
  })
);
