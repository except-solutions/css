const mongoose = require('mongoose');
const startHelper = require('../app/helpers/startHelper');

describe('Test client model creation on start event', () => {

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    mongoose.connection.close();
  });

  it('Clien must success created', async () => {

    const clientChatMock = {
      first_name: 'testName',
      id: 2218812331,
      last_name: 'testLastName',
      type: 'private',
      username: 'testuser'
    };
  
    const client = await startHelper.createClientIfNotExist(clientChatMock);

    expect(client.telegramId).toBe(clientChatMock.id);
    expect(client.firstName).toBe(clientChatMock.first_name);
    expect(client.lastName).toBe(client.last_name);
    expect(client.username).toBe(clientChatMock.username);
  });

  it('Client must not be created if it already exists', async () => {
    const clientChatMock = {
      first_name: 'testName2',
      id: 12312314,
      last_name: 'testLastName2',
      type: 'private',
      username: 'testuser4'
    };

    await startHelper.createClientIfNotExist(clientChatMock);
    expect(await startHelper.createClientIfNotExist(clientChatMock)).toBeUndefined();
  });
});
