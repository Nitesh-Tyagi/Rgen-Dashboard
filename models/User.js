const mysql = require('mysql2');

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
      callback(null, { userId: userId });
    }
  });
}

// GetUsername API
function getUsername(userId, callback) {
  const query = 'SELECT username FROM User WHERE id = ?';
  pool.query(query, [userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const username = results.length > 0 ? results[0].username : null;
      callback(null, { username: username });
    }
  });
}

// GetSettings API
function getSettings(userId, callback) {
  const query = 'SELECT * FROM User WHERE id = ?';
  pool.query(query, [userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const settings = results.length > 0 ? results[0] : null;
      callback(null, settings);
    }
  });
}

// PutSettings API
function putSettings(userId, username, email, phone, password, callback) {
  const query = 'UPDATE User SET username = ?, email = ?, phone = ?, password = ? WHERE id = ?';
  pool.query(query, [username, email, phone, password, userId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, { userId: userId });
    }
  });
}

module.exports = { login, getUsername, getSettings, putSettings };
