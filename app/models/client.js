const mongoose = require('../../db');
const telegramSchema = require('./telegram');

module.exports = mongoose.model(
  'Client',
  mongoose.Schema({
    ...telegramSchema,
    ...{
      companyName: String,
    }
  })
);
