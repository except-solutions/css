const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(
    [
      `mongodb://${process.env.MONGO_USERNAME}:`,
      `${process.env.MONGO_PASSWORD}@`,
      `${process.env.MONGO_HOST}:`,
      `${process.env.MONGO_PORT}/`,
      `${process.env.MONGO_SCHEMA}`,
    ].join(''),
    {useNewUrlParser: true}
  );
} else {
  const mongoPort = process.env.TEST_MONGO_PORT ? process.env.TEST_MONGO_PORT : '27016';
  mongoose.connect(
    `mongodb://127.0.0.1:${mongoPort}/test`,
    {useNewUrlParser: true}
  );
}

module.exports = mongoose;
