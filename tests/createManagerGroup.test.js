const mongoose = require('mongoose');
const addManagerHelper = require('../app/helpers/addManagerHelper');
const Manager = require('../app/models/manager');
const i18n = require('../app/locales');

describe('Test manager creation', () => {

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    mongoose.connection.close();
  });

  it('Manager must success create', async () => {

    const managerMock = {
      id: 12321312,
      first_name: 'firstName',
      last_name: 'lastName',
      username: 'username'
    };

    const createResult = await addManagerHelper.createMananger(managerMock, i18n);
    const isManager = await Manager.exists({telegramId: managerMock.id});

    expect(createResult.success).toBe(true);
    expect(isManager).toBe(true);
  });
});
