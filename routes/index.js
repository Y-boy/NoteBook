var express = require('express');
var router = express.Router();

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

module.exports = router;
