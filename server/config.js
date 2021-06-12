const path = require('path');

module.exports = {
  development: {
    username: 'pavel',
    password: 'root',
    database: 'online_stoddre',
    host: 'localhost',
    port: 3306,
    dialect: 'pg',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
