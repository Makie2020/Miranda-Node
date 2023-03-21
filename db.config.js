const mysql = require('mysql')
const { MYSQL_DATABASE,MYSQL_HOST,MYSQL_PASSWORD,MYSQL_USER } = process.env;

module.exports = () => {
  connection = mysql.createConnection({  
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  });
  connection.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!:)');
    }
  });
    return connection;
  }