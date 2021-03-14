const bcrypt = require('bcrypt');
const userService = require('../services/userService');


exports.fetchAll = (req, res, next) => {
	userService.fetchAllUsers()
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.fetchById = (req, res, next) => {
	userService.fetchUserById(req.params.id)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.create = (req, res, next) => {
	const user ={
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		name: req.body.name,
		role: req.body.role
	};
	userService.createUser(user)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.update = (req, res, next) => {
	let data = req.body;
	if(req.body.password){
		data.password = bcrypt.hashSync(req.body.password, 10)
	}
	userService.updateUser(req.params.id, data)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.delete = (req, res, next) => {
	userService.deleteUser(req.params.id)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}