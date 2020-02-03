const mongoose = require('../../db');

const groupSchema = mongoose.Schema({
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
});

groupSchema.statics.getManagerGroup = async function () {
  return this.findOne();
};

module.exports = mongoose.model(
  'Group',
  groupSchema
);
