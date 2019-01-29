'use strict';

const XLSX = require('xlsx');

class ExcelUtil {
  /**
   * 读取excel的sheet，转换成对象数组
   * @param {String} filePath excel文件绝对路径
   * @param {Number} sheetIndex sheet下标
   * @return {Array} 对象数组
   */
  static readToObjectArray(filePath, sheetIndex) {
    const workbook = XLSX.readFile(filePath);
    if (workbook.SheetNames && workbook.SheetNames.length === 0) {
      throw new Error('excel必须存在sheet页');
    }
    const sheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];
    return XLSX.utils.sheet_to_json(sheet);
  }
  /**
   * 将对象数组输出到excel文件，默认工作簿名为sheet1
   * @param {Array} arrayOfObject 对象数组
   * @param {String} outputFilePath 输出excel路径
   */
  static writeObjectArray(arrayOfObject, outputFilePath) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.sheet_add_json(arrayOfObject);
    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
    XLSX.writeFile(wb, outputFilePath);
  }
}

module.exports = ExcelUtil;
