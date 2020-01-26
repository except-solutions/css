const mongoose = require('../../db');

module.exports = new mongoose.model(
  'Manager',
  mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String
  })
);
