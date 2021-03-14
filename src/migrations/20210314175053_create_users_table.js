
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments().primary();
        table.string('username').notNullable();
        table.string('name').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.enu('role', ['admin', 'user']).defaultTo('user');
        table.timestamps();
    

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
