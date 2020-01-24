const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const db = require('../db');
  db.models.Cat.find({name: 'Zildjian'}, function (err, cats) {
    if (cats.length) {
      res.send(cats[0].name);
    } else {
      const kitty = new db.models.Cat({ name: 'Zildjian' });
      kitty.save().then(() => res.send(kitty.name));
    }
  });
});

module.exports = router;
