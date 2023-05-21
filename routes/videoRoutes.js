const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// POST GetVideos
router.post('/getVideos', videoController.getVideos);

// POST GetVideo
router.post('/getVideo', videoController.getVideo);

// POST DownloadVideo
router.post('/downloadVideo', videoController.downloadVideo);

// POST PriceCalculator
router.post('/priceCalculator', videoController.priceCalculator);

module.exports = router;
