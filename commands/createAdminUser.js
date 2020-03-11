require('dotenv').config();

const AdminUser = require('../app/models/adminUser');
const command = require('commander');
const adminUserLevels = require('../app/constants').adminUserLevels;
const createAdminUser = require('../app/admin/helpers/adminUserHelpers').createAdminUser;

command.option('-e, --email <value>', 'Add user email option -e email@example.com')
  .option('-p, --password <value>', 'Add user password -p qwertyq')
  .option('-l, --level <value>', '', 'manager');

command.parse(process.argv);

let level;

if (!Object.keys(adminUserLevels).includes(command.level)) {
  throw Error(`Unknown admin user type ${command.level}`);
} else {
  level = adminUserLevels[command.level];
}

(async () => {
  await createAdminUser(
    command.email,
    command.password,
    level,
    () => console.log('user success created'),
    (e) => console.log(e)
  );
  await AdminUser.db.base.connections.map(c => c.close());
})();
