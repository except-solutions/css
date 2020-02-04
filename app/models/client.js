const mongoose = require('../../db'),
  telegramSchema = require('./telegram');
require('mongoose-type-email');

const profileSchema = mongoose.Schema({
  surname:String,
  name: String,
  patronymic:String,
  companyName: String,
  email: mongoose.SchemaTypes.Email
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
