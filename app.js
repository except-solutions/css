require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./db');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/admin',require('./app/admin/base'));

// For test
app.get('/', async (req, res) => {
  await res.send('Fucking Hostile');
});
//

module.exports = app;
