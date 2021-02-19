var mysql = require('mysql');
var sqlStatement = require('./mysql-statement');
var pool  = mysql.createPool({
  host    : 'localhost',
  port    : '13306',
  user    : 'root',
  password: 'yba10758',
  database: 'notebook'
});

/**
 * @param {string} tableName -表名称
 * @param {Object} params - 参数列表
 * @param {Function} callback - 回调函数
 */
function insertRow (tableName, params, callback) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(sqlStatement.insert(tableName, params), (err, result) => {
      callback(err, result);
      connection.release();
    });
  });
}

module.exports = {insertRow};