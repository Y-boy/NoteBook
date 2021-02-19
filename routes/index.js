var express = require('express');
var router = express.Router();
var mysqlConfig = require('./config/mysql-config');

/**
 * Get Request Example
 * @route GET /
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send({ result: true, message: 'GET OK' });
});

/**
 * Post Request Example
 * @route POST /
 * @param {Record.model} record.body.required - The new Record
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', function(req, res) {
  let bodyParams = {...req.body, timestamp: (new Date()).getTime()};
  mysqlConfig.insertRow('example', bodyParams, (err, result) => {
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: result, message: 'post to sql ok'});
  })
});

/**
 * @typedef Record
 * @property {string} text - text
 */

module.exports = router;
