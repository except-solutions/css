const mongoose = require('../../db');
const telegramSchema = require('./telegram');

const modelName = 'Manager';

const managerSchema = mongoose.Schema({
  ...telegramSchema,
  ...{
    approved: {
      type: Boolean,
      default: false
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Group'
    },
  }
});

managerSchema.methods.getType = () => modelName.toLowerCase();

module.exports = mongoose.model(
  modelName,
  managerSchema
);
