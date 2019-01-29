'use strict';

const path = require('path');
const assert = require('assert');

const ExcelUtil = require('./util/excel');

class Processor {
  constructor(filePath) {
    assert(filePath, 'filePath 不能为空');
    this.filePath = path.resolve(filePath);
    const dir = path.dirname(this.filePath);
    const ext = path.extname(this.filePath);
    const basename = path.basename(this.filePath, ext);
    this.outputFilePath = path.join(dir, basename + '_output', ext);

    assert(basename === path.basename(this.outputFilePath), `outputFilePath的目录不对,expect:${basename},actual:${path.basename(this.outputFilePath)}`);
    assert(ext === path.extname(this.outputFilePath), `outputFilePath的扩展名不对,expect:${ext},actual:${path.extname(this.outputFilePath)}`);
  }
  read() {
    return ExcelUtil.readToObject(this.filePath);
  }
  write(data) {
    return ExcelUtil.writeObjectArray(data, this.outputFilePath);
  }
}

module.exports = Processor;
