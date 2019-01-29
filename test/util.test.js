'use strict';

const StringUtil = require('../lib/util/string_util');
const assert = require('assert');

describe('test/util.test.js', () => {
  it('>分隔,多个', () => {
    const oldColumn = '首页>住房改革与发展；首页>党建工作>工作动态；首页>离退休干部工作>工作动态；首页>对外交流与合作>对外合作';
    const columns = StringUtil.splitOldColumn(oldColumn);
    assert.ok(columns.length === 4);

    // 首页>对外交流与合作>对外合作
    assert.ok(columns[3].name === '对外合作');
    assert.ok(columns[3].parent.name === '对外交流与合作');
    assert.ok(columns[3].parent.parent.name === '首页');

    // 首页>住房改革与发展
    assert.ok(columns[0].name === '住房改革与发展');
    assert.ok(columns[0].parent.name === '首页');
  });
  it('>>分隔,多个', () => {
    const oldColumn = ' 政府信息公开 >> 部门预决算';
    const columns = StringUtil.splitOldColumn(oldColumn);

    assert.ok(columns.length === 1);

    assert.ok(columns[0].name === '部门预决算');
    assert.ok(columns[0].parent.name === '政府信息公开');
  });

  it('单个', () => {
    const oldColumn = '征求意见';
    const columns = StringUtil.splitOldColumn(oldColumn);

    assert.ok(columns.length === 1);

    assert.ok(columns[0].name === '征求意见');
    assert.ok(columns[0].parent === undefined);
  });
});
