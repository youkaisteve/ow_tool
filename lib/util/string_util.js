'use strict';

class StringUtil {
  /**
   * 解析多个栏目字符串
   * @param {String} oldColumn 老栏目
   * @return {Array} [{"name":"住房改革与发展","parent":{"name":"首页"}},{"name":"工作动态","parent":{"name":"党建工作","parent":{"name":"首页"}}},{"name":"工作动态","parent":{"name":"离退休干部工作","parent":{"name":"首页"}}},{"name":"对外合作","parent":{"name":"对外交流与合作","parent":{"name":"首页"}}}]
   */
  static splitOldColumn(oldColumn) {
    if (!oldColumn) {
      return oldColumn;
    }
    const trimOldColumn = oldColumn.trim();
    if (trimOldColumn.length === 0) {
      return oldColumn;
    }

    const columns = trimOldColumn.split('；');
    const result = [];
    // 提取每个栏目的父栏目
    columns.forEach(column => {
      let splitor = '>';
      if (column.indexOf('>>') >= 0) {
        splitor = '>>';
      }
      const columnLevels = column.split(splitor).reverse();
      const current = {};
      columnLevels.forEach((cl, index) => {
        if (index === 0) {
          current.name = cl.trim();
        } else {
          let lastCurrent = null;
          while (index-- >= 0) {
            lastCurrent = current.parent;
          }
          if (lastCurrent) {
            lastCurrent.parent = { name: cl.trim() };
          } else {
            current.parent = lastCurrent = { name: cl.trim() };
          }
        }
      });
      result.push(current);
    });
    return result;
  }
}

module.exports = StringUtil;
