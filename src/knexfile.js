require('dotenv').config({ path: __dirname + '/../.env' });


module.exports = {
	client: 'mysql2',
	connection: {
	host : process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
  	},
	migrations: {
	tableName: 'migrations',
	directory: './migrations'
	}
};

// module.exports = knexfile;