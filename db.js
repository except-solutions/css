const mongoose = require('mongoose');

mongoose.connect(
  [
    `mongodb://${process.env.MONGO_USERNAME}:`,
    `${process.env.MONGO_PASSWORD}@`,
    `${process.env.MONGO_HOST}:`,
    `${process.env.MONGO_PORT}/`,
    `${process.env.MONGO_SCHEMA}`,
  ].join(''),
  {useNewUrlParser: true, useUnifiedTopology: true}
);
mongoose.set('useCreateIndex', true);

module.exports = mongoose;
