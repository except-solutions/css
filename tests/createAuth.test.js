const mongoose = require('mongoose');
const loginAuth = require('../app/admin/auth');
const adminUserHelper = require('../app/admin/helpers/adminUserHelpers');

describe('Test client model creation on start event', () => {
  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    mongoose.connection.close();
  });

  it('Should return false value on not existed user', async () => {
    expect(
      await loginAuth(
        'Notexisted@email.com',
        'password',
      )
    ).toBe(
      false
    );
  });

  it('Should success create user and auth him', async () => {

    const userData = {
      email: 'test@test.com',
      password: 'password',
      level: 1
    };
    await adminUserHelper.createAdminUser(
      userData.email,
      userData.password,
      userData.level,
      () => null,
      () => null
    );

    const authResult = await loginAuth(
      userData.email,
      userData.password,
      () => null,
      () => null
    );

    expect(authResult.email).toBe(userData.email);
    expect(authResult.level).toBe(userData.level);
  });
});
