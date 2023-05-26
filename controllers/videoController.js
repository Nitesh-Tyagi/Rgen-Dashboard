const Video = require('../models/Video');

// POST GetVideos
exports.getVideos = (req, res) => {
  const { userId } = req.body;

  Video.getVideos(userId, (err, videos) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(videos);
  });
};

// POST GetVideo
exports.getVideo = (req, res) => {
  const { userId, id } = req.body;

  Video.getVideo(userId, id, (err, video) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(video);
  });
};

// POST DownloadVideo
exports.downloadVideo = (req, res) => {
  const { userId, id } = req.body;

  Video.downloadVideo(userId, id, (err, link) => {
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
