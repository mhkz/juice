/**
 * 1 如果一个mysql连接，长时间没有跟mysql服务器通信，mysql会自动关闭
 * 2 默认是一天
 * 3 连接池来解决
 * 
 */

 var mysql = require('mysql')

 // 创建一个连接池
 var conn_pool = mysql.createPool({
     host: '132.232.90.109',
     port: 3306,
     user: 'qq',
     database: 'qq',
     password: 'guofeng2019'
 })

 // callbac 3个参数 1 err, 2 row_data 3 每个字段的说明
 function mysql_exce(sql, callback) {
    // 异步的，如果有结果，就会执行回调
    conn_pool.getConnection(function(err, conn) {
        if(err && callback) {
            return callback(err, null, null);
        }

        conn.query(sql, function(sql_err, sql_result, fields_desc) {
            if(sql_err && callback) return callback(sql)
            if(callback) return callback(null, sql_result, fields_desc)
        })
    })
 }
 const sql_cmd = 'SELECT * FROM user;' 
 mysql_exce(sql_cmd, function(err, sql_result, fields_desc){
    console.log("err", err);
    console.log("sql", sql_result);
    console.log("fie", fields_desc);
 })