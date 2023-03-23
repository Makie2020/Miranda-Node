const mysql = require('mysql')
require('dotenv').config()
const { MYSQL_DATABASE,MYSQL_HOST,MYSQL_PASSWORD,MYSQL_USER } = process.env;

var connection = mysql.createPool({  
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  });
  connection.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = connection

function dbQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results) => {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}
module.exports = dbQuery
