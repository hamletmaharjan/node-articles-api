
exports.up = function(knex) {
    return knex.schema.createTable('articles', table => {
        table.increments().primary();
        table.string('title').notNullable();
        table.text('description', ['longtext']).notNullable();
        table.string('image');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.timestamps();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('articles');
};
