const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, secretKey, function (err, decoded) {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        const info = {
          id: decoded.id,
          role: decoded.role
        }
        req.user = info;
        next();
    });
}


exports.verifyAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized' });
  }
}


exports.verifyUser = (req, res, next) => {
  if (req.user.id == req.params.id) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized' });
  }
}

