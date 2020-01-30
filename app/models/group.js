const mongoose = require('../../db');

module.exports = mongoose.model(
  'Group',
  mongoose.Schema({
    chatId: {
      type: Number,
      unique: true
    },
    managers: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Manager'
      }
    ],
    title: String
  })
);
