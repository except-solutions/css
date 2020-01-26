const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://
  ${process.env.MONGO_USERNAME}:
  ${process.env.MONGO_PASSWORD}@:
  ${process.env.MONGO_PORT}/
  ${process.env.MONGO_SCHEMA}`,
  {useNewUrlParser: true}
);

module.exports = mongoose;
