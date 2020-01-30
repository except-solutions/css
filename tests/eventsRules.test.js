const eventsAuthMap = require('../app/auth/eventsRules');

describe('Test events auth map', () => {
  it('Must find register event rule', async () => {
    expect(eventsAuthMap.findByMessage('commands', 'i_am_manager'))
      .toBe(eventsAuthMap.commands.addManager);
  });

  it('Must check permission', () => {
    expect(eventsAuthMap.hasPermission('commands', 'its_manager_group', {getType: () => 'manager'}))
      .toBe(true);
  });
});
