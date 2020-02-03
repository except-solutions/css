const ManagerSchema = require('../models/manager');
const ClientSchema = require('../models/client');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const Group = require('../models/group');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: ManagerSchema,
    },
    {
      resource: ClientSchema,
    },
    {
      resource: Group
    }
  ],
});

module.exports = AdminBroExpress.buildRouter(adminBro);
