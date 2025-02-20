  const jwt = require('jsonwebtoken');
  const secretKey = require('../server');
  const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      res.status(403).json({ message: 'Invalid token' });
    }
  };

  module.exports = verifyToken;