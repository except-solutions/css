const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://day-challenge:day-challenge@localhost:27017/day-challenge',
    {useNewUrlParser: true}
  );
  
const Cat = mongoose.model('Cat', { name: String });

module.exports = mongoose;