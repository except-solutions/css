const _ = require('lodash');
const passwordHash = require('password-hash');
const AdminUser = require('../models/adminUser');

const loginAuth = async (email, password) => {
  /**
    User auth method.

    @param {email} string
    @param {password} string
    @return {Boolean|Object} - Return false if auth was failed or {AdminUser} object
   */
  let user;

  user = await AdminUser.findOne({email: email});
  if (_.isNull(user)) {
    return false;
  }

  return passwordHash.verify(password, user.hash) ? user : false;
};

module.exports = loginAuth;
