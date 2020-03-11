const AdminUser = require('../../models/adminUser');
const passwordHash = require('password-hash');

const createAdminUser = async (email, password, level, successHandler, errorHandler) => {

  try {
    const user = await AdminUser.create(
      {
        email: email,
        hash: passwordHash.generate(password),
        level: level
      }
    );
    successHandler(user);
  } catch (e) {
    errorHandler(e);
  }
};

module.exports = {
  createAdminUser
};
