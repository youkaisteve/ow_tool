'use strict';

const DbProvider = require('./db/db_provider');
const Processor = require('./base_processor');

class OldProcessor extends Processor {
  constructor(filePath) {
    super(filePath);
    this.db = DbProvider.getOldDb();
  }
  /**
   * 业务逻辑
   * read >> process >> write
   */
  process() {
    // const data = this.read();
    // const output = data;
    // this.write(output);
  }
}

module.exports = OldProcessor;
