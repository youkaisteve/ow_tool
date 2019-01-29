'use strict';

const config = require('../../config/config.default');
const Sequelize = require('sequelize');

const dbs = new Map();

class DbProvider {
  static getOldDb() {
    if (dbs.has('old')) {
      return dbs.get('old');
    }
    const oldInstanse = new Sequelize(config.dbs.old.database, config.dbs.old.username, config.dbs.old.password, config.dbs.old.options);
    dbs.set('old', oldInstanse);
    return oldInstanse;
  }
  static getNewDb() {
    if (dbs.has('new')) {
      return dbs.get('new');
    }
    const oldInstanse = new Sequelize(config.dbs.old.database, config.dbs.old.username, config.dbs.old.password, config.dbs.old.options);
    dbs.set('new', oldInstanse);
    return oldInstanse;
  }
}

module.exports = DbProvider;
