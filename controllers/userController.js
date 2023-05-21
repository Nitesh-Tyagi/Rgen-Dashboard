const User = require('../models/User');

// POST Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.login(email, password, (err, userId) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ userid: userId });
  });
};

// POST GetUsername
exports.getUsername = (req, res) => {
  const { userid } = req.body;

  User.getUsername(userid, (err, username) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ username });
  });
};

// POST GetSettings
exports.getSettings = (req, res) => {
  const { userid } = req.body;

  User.getSettings(userid, (err, settings) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json(settings);
  });
};

// PUT PutSettings
exports.putSettings = (req, res) => {
  const { userid, username, email, phone, password } = req.body;

  User.putSettings(userid, username, email, phone, password, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ userid });
  });
};
