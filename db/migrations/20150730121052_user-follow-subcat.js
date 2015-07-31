
exports.up = function(knex, Promise) {
  // var votes_add = knex.schema.createTable('votes', function(table) {
  //   table.increments('id').primary();
  //   table.integer('link_id').references('id').inTable('links');
  //   table.integer('user_id').references('id').inTable('users');
  //   table.integer('votes');
  //   console.log("Created Votes Table");
  // })

  var follows_add = knex.schema.createTable('follows', function(table) {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.integer('subcat_id').references('id').inTable('subcategories');
  })

  console.log("Added the follows table");
  return Promise.all([follows_add]);
};

exports.down = function(knex, Promise) {
  var follows_drop = knex.schema.dropTableIfExists('follows')
};
