'use strict';

module.exports = {
  dbs: {
    old: {
      database: 'ringcms',
      username: 'sa',
      password: 'zjb@YZW123',
      options: {
        host: '172.16.0.243',
        port: 2433,
        dialect: 'mssql'
      }
    },
    new: {
      database: 'mohurd_ow',
      username: 'dev_admin',
      password: 'zk.123456',
      options: {
        host: '172.16.0.130',
        port: 7301,
        dialect: 'mysql'
      }
    }
  }
};
