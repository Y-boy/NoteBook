var express = require('express');
var router = express.Router();
var mysqlConfig = require('./config/mysql-config');

/**
 * 提交文献
 * @group literature - 关于文献部分的 API
 * @route POST /literature
 * @param {Literature.model} literature.body.required - 所提交的文献元数据
 * @returns {object} 200 - 正常响应
 * @returns {Error}  default - 异常响应
 */
router.post('/', function(req, res) {
  mysqlConfig.insertRow('literature', req.body, (err, result) => {
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: result, message: 'post to sql ok'});
  })
});

/**
 * @typedef Literature - 文献元数据
 * @property {string} doi.required - DOI 号，作为 ID 使用
 * @property {string} title.required - 标题
 * @property {string} responsibilities.required - 责任者
 * @property {string} type.required - 类型标志 - [ M, C, J, N, P ]
 * @property {string} date.required - 出版日期
 * @property {string} publisher.required - 出版者
 * @property {string} quote.required - 文献以 GB-T7714 格式的描述
 * @property {string} filepath.required - 上传的文件路径
 * @property {string} keywords - 关键字
 */

module.exports = router;