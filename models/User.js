const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Rgen'
});

// Login API
function login(email, password, callback) {
  const query = 'SELECT id FROM User WHERE (email = ? OR phone = ?) AND password = ?';
  pool.query(query, [email, email, password], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const userId = results.length > 0 ? results[0].id : 0;
      callback(null, { userid: userId });
    }
  });
}

// GetUsername API
function getUsername(userid, callback) {
  const query = 'SELECT username FROM User WHERE id = ?';
  pool.query(query, [userid], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const username = results.length > 0 ? results[0].username : null;
      callback(null, { username: username });
    }
  });
}

// GetSettings API
function getSettings(userid, callback) {
  const query = 'SELECT username, email, phone, password FROM User WHERE id = ?';
  pool.query(query, [userid], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const settings = results.length > 0 ? results[0] : null;
      callback(null, settings);
    }
  });
}

// PutSettings API
function putSettings(userid, username, email, phone, password, callback) {
  const query = 'UPDATE User SET username = ?, email = ?, phone = ?, password = ? WHERE id = ?';
  pool.query(query, [username, email, phone, password, userid], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, { userid: userid });
    }
  });
}

module.exports = { login, getUsername, getSettings, putSettings };
