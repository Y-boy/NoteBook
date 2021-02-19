function checkType (argument) {
  switch (typeof(argument)) {
    case 'string':
      return `'${argument}'`;
    default:
      return argument;
  }
}

function comvertParams (params) {
  let keyArr = [], valArr = [];
  for(i in params) {
    keyArr.push(i);
    valArr.push(checkType(params[i]));
  }
  return {
    keys: keyArr.join(', '),
    values: valArr.join(', ')
  }
}

/**
 * 
 * @param {string} tableName - 数据表名
 * @param {Object} params - 插入数据参数序列
 */
function insert (tableName, params) {
  let {keys, values} = comvertParams(params)
  return `INSERT INTO ${tableName} ( ${keys} ) VALUES ( ${values} );`
}

module.exports = {
  insert
};