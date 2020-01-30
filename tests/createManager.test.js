const mongoose = require('mongoose');
const addManagerGroupHelper = require('../app/helpers/addManagerGroupHelper');

describe('Test add group chat', () => {

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    mongoose.connection.close();
  });

  it('Group must success created', async () => {

    const chatData = {
      id: 123123,
      title: 'test title'
    };

    const result = await addManagerGroupHelper.addGroup(chatData);
    const group = result.group;

    expect(group.title).toBe(chatData.title);
    expect(group.chatId).toBe(chatData.id);
  });
});
