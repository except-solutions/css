require('dotenv').config();

const adminUser = require('../app/models/adminUser');
const command = require('commander');
const passwordHash = require('password-hash');
const adminUserTypes = require('../app/constants').adminUserLevels;

command.option('-e, --email <value>', 'Add user email option -e email@example.com')
  .option('-p, --password <value>', 'Add user password -p qwertyq')
  .option('-l, --level <value>', '', 'manager');

command.parse(process.argv);

let level;

if (!Object.keys(adminUserTypes).includes(command.level)) {
  throw Error(`Unknown admin user type ${command.level}`);
} else {
  level = adminUserTypes[command.level];
}

adminUser.create(
  {
    email: command.email,
    hash: passwordHash.generate(command.password),
    level: level
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Admin user success created');
    }
    adminUser.db.base.connections.map(c => c.close());
  }
);
