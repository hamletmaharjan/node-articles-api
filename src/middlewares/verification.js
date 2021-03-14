const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, 'shh', function (err, decoded) {
        const info = {
            id: decoded.id,
            role: decoded.role
        }
        req.user = info;
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
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

