const knex = require('../db');
const bcrypt = require('bcrypt');


exports.fetchAll = (req, res, next) => {
	knex.select().table('users')
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.fetchById = (req, res, next) => {
	knex('users').where('id', req.params.id)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.create = (req, res, next) => {
	knex('users').insert({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		name: req.body.name,
		role: req.body.role
	})
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.update = (req, res, next) => {
	let data = req.body;
	if(req.body.password){
		data.password = bcrypt.hashSync(req.body.password, 10)
	}
	knex('users')
	.where('id', '=', req.params.id)
	.update(data)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.delete = (req, res, next) => {
	knex('users')
  	.where('id', req.params.id)
  	.del()
	.then(data => res.json({ data }))
    .catch(err => next(err));
}