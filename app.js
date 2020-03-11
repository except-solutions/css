
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const adminBroMw = require('./app/admin/base');

require('./db');
const app = express();

// Admin bro must be first included middleware.
app.use('/admin', adminBroMw);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// For test
app.get('/', async (req, res) => {
  await res.redirect('/admin');
});

module.exports = app;
