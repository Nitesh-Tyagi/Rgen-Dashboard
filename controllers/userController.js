const User = require('../models/User');

// POST Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.login(email, password, (err, userId) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ userId: userId.userId.toString() });
  });
};

// POST GetUsername
exports.getUsername = (req, res) => {
  const { userId } = req.body;

  User.getUsername(userId, (err, username) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ username: username.username.toString() });
  });
};

// POST GetSettings
exports.getSettings = (req, res) => {
  const { userId } = req.body;

  User.getSettings(userId, (err, settings) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(settings);
  });
};

// PUT PutSettings
exports.putSettings = (req, res) => {
  const { userId, username, email, phone, password } = req.body;

  User.putSettings(userId, username, email, phone, password, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ userId: userId.toString() });
  });
};
