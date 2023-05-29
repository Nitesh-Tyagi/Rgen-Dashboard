const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Rgen'
});

// GetVideos API
function getVideos(userid, result) {
  const query = 'SELECT id, videoname, input FROM Video WHERE userid = ?';
  pool.query(query, [userid], (error, results) => {
    if (error) {
      result(error, null);
    } else {
      result(null, results);
    }
  });
}

// GetVideo API
function getVideo(userid, videoid, result) {
  const query = 'SELECT * FROM Video WHERE id = ? AND userid = ?';
  pool.query(query, [videoid, userid], (error, results) => {
    if (error) {
      result(error, null);
    } else {
      const video = results.length > 0 ? results[0] : null;
      result(null, video);
    }
  });
}

// DownloadVideo API
function downloadVideo(userid, videoid, result) {
  const query = 'SELECT link FROM Video WHERE id = ? AND userid = ?';
  pool.query(query, [videoid, userid], (error, results) => {
    if (error) {
      result(error, null);
    } else {
      const link = results.length > 0 ? results[0].link : null;
      result(null, { link: link });
    }
  });
}

module.exports = { getVideos, getVideo, downloadVideo };
