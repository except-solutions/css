const ManagerSchema = require('../models/manager');
const ClientSchema = require('../models/client');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: ManagerSchema,
    },
    {
      resource: ClientSchema,
    }
  ],
});

module.exports = AdminBroExpress.buildRouter(adminBro);
