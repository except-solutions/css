const Manager = require('../models/manager');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const Group = require('../models/group');
const ClientResource = require('./resources/client');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  rootPath: '/admin',
  branding: {
    companyName: process.env.COMPANY_NAME
  },
  resources: [
    ClientResource,
    {
      resource: Manager,
    },
    {
      resource: Group
    }
  ],
  dashboard: {
    component: AdminBro.bundle('./frontend/components/dashboard')
  },
});

module.exports = AdminBroExpress.buildRouter(adminBro);
