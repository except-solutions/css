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

  try {
    user = await AdminUser.findOne({email: email});
  } catch (e) {
    return false;
  }

  return passwordHash.verify(password, user.hash) ? user : false;
};

module.exports = loginAuth;
