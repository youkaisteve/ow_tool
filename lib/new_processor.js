'use strict';

const DbProvider = require('./db/db_provider');
const Processor = require('./base_processor');

class NewProcessor extends Processor {
  constructor(filePath) {
    super(filePath);
    this.db = DbProvider.getNewDb();
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

module.exports = NewProcessor;
