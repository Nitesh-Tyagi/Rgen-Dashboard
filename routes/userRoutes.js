const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST Login
router.post('/login', userController.login);

// POST GetUsername
router.post('/getUsername', userController.getUsername);

// POST GetSettings
router.post('/getSettings', userController.getSettings);

// PUT PutSettings
router.put('/putSettings', userController.putSettings);

module.exports = router;
