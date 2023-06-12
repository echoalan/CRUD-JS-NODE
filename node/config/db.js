const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prod'
});

module.exports = connection;
