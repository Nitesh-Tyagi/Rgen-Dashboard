const Video = require('../models/Video');

// POST GetVideos
exports.getVideos = (req, res) => {
  const { userid } = req.body;

  Video.getVideos(userid, (err, videos) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(videos);
  });
};

// POST GetVideo
exports.getVideo = (req, res) => {
  const { userid, id } = req.body;

  Video.getVideo(userid, id, (err, video) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(video);
  });
};

// POST DownloadVideo
exports.downloadVideo = (req, res) => {
  const { userid, id } = req.body;

  Video.downloadVideo(userid, id, (err, link) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ link });
  });
};

// POST PriceCalculator
exports.priceCalculator = (req, res) => {
  const { x, y, z } = req.body;

  const price = parseInt(x) + parseInt(y) + parseInt(z);

  return res.json({ price });
};
