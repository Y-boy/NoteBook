var express = require('express');
var router = express.Router();
var mysqlConfig = require('./config/mysql-config');

/**
 * @typedef Note - 在文献中做的笔记
 * @property {string} id.required - 笔记 ID
 * @property {string} title.required - 关联的文献的标题
 * @property {string} filename.required - 关联的文件名
 * @property {date} createdDate.required - 创建时间
 * @property {date} updatedDate - 更新时间
 * @property {integer} position.required - 笔记对应于原文的定位
 */

module.exports = router;
