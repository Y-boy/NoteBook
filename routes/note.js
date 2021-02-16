var express = require('express');
var router = express.Router();
var multerConfig = require('./config/multer-config');

/**
 * 上传原始文件
 * @group note - 关于笔记部分的 API
 * @route POST /note/original-file
 * @param {file} file.formData.required 选择文件
 * @returns {object} 200 - 正常响应
 * @returns {Error}  default - 异常响应
 */
router.post('/original-file', multerConfig.single('file'), function(req, res) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  if(req.file && req.file.mimetype === 'application/pdf')
    res.send({ file: req.file, message: 'POST ok' });
  else {
    res.send({ message: 'Incorrect File Type' });
  }
});

/**
 * @typedef Note
 * @property {string} id.required - ID
 * @property {date} createdDate - Created Date
 * @property {date} updatedDate - Updated Date
 * @property {integer} position - Note's Position in Original File
 * @property {File.model} file - Original File Object
 */

/**
 * @typedef File
 * @property {string} id.required - ID
 * @property {integer} size.required - Size
 * @property {string} path.required - Path
 */

module.exports = router;
