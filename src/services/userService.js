const knex = require('../db');


exports.fetchAllUsers = () => {
	return knex.select().table('users');
}

exports.fetchUserById = (id) => {
	return knex('users').where('id', id).first();
}

exports.createUser = (user) => {
	return knex('users').insert(user);
}

exports.updateUser = (id, user) => {
	return knex('users')
	.where('id', '=', id)
	.update(user);
}

exports.deleteUser = (id) => {
	return knex('users')
  	.where('id', id)
  	.del();
}



exports.fetchUserByEmail = (email) => {
	return knex('users').where('email', email).first();
}