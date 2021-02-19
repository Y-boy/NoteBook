var express = require('express');
var router = express.Router();
var multerConfig = require('./config/multer-config');
var mysqlConfig = require('./config/mysql-config');

/**
 * 上传原始 PDF 文件
 * @group file - 关于文件部分的 API
 * @route POST /file
 * @param {file} file.formData.required 选择文件
 * @returns {object} 200 - 正常响应
 * @returns {Error}  default - 异常响应
 */
router.post('/', multerConfig.single('file'), function(req, res) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  if(req.file && req.file.mimetype === 'application/pdf')
    res.send({ file: req.file, message: 'POST ok' });
  else {
    res.send({ message: 'Incorrect File Type' });
  }
});

/**
 * @typedef File - 上传的文献对应的文件
 * @property {string} name.required - 文件名（暂时作为 ID 使用）
 * @property {integer} size.required - 大小
 * @property {string} path.required - 路径
 */

module.exports = router;