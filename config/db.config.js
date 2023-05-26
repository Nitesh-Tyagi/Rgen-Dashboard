const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'Rgen'
});

module.exports = db;