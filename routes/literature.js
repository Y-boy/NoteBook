var express = require('express');
var router = express.Router();
var mysqlConfig = require('./config/mysql-config');

/**
 * 提交文献
 * @group literature - 关于文献部分的 API
 * @route POST /literature
 * @param {string} title.body.required - 标题（暂时作为 ID 使用）
 * @param {string} responsibility.body.required - 责任者
 * @param {string} type.body.required - 类型标志（M、C、J、N、P）
 * @param {string} date.body.required - 出版日期
 * @param {string} publisher.body.required - 出版者
 * @param {string} quote.body.required - 文献以 GB-T7714 格式的描述
 * @param {string} filename.body.required - 上传的文件名
 * @param {string} keywords.body - 关键字
 * @returns {object} 200 - 正常响应
 * @returns {Error}  default - 异常响应
 */
router.post('/', function(req, res) {
  // to do something
});

/**
 * @typedef Literature - 文献元数据
 * @property {string} title.required - 标题（暂时作为 ID 使用）
 * @property {string} responsibility.required - 责任者
 * @property {string} type.required - 类型标志（M、C、J、N、P）
 * @property {string} date.required - 出版日期
 * @property {string} publisher.required - 出版者
 * @property {string} quote.required - 文献以 GB-T7714 格式的描述
 * @property {string} filename.required - 上传的文件名
 * @property {string} keywords - 关键字
 */

module.exports = router;