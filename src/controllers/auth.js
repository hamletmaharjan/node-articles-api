const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const secretKey = process.env.SECRET_KEY;

exports.login = (req, res, next) => {
    userService.fetchUserByEmail(req.body.email)
    .then((data) => {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        const infos = {};
        infos.id = data.id;
        infos.email = data.email;
        infos.role = data.role;
        const token = jwt.sign(infos, secretKey);
        res.json({id:data.id,  token: token , name: data.name, username: data.username, auth: true});
        // res.json(data );
      } else {
        res.status(401).json({ message: 'Incorrect email or password' , auth:false });
      }
    })
    .catch((err) => next(err));
}


exports.signup = (req, res, next) => {
    const user = {
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		name: req.body.name,
		role: 'user'
	};
    userService.createUser(user)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}