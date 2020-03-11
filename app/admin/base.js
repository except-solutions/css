const Manager = require('../models/manager');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const Group = require('../models/group');
const AdminUser = require('../models/adminUser');
const ClientResource = require('./resources/client');
const loginAuth = require('./auth');

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
    },
    {
      resource: AdminUser
    }
  ],
  dashboard: {
    component: AdminBro.bundle('./frontend/components/dashboard')
  },
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: loginAuth,
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
});

module.exports = router;
