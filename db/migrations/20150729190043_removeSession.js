
exports.up = function(knex, Promise) {
  var sessions_drop = knex.schema.dropTableIfExists('session')
  return Promise.all([sessions_drop])
};

exports.down = function(knex, Promise) {
  var session = knex.schema.createTable('session', function(table) {
        table.string('sid').primary().notNullable();
        table.json('sess').notNullable();
        table.timestamp('expire',6).notNullable();
        table.string('userID')
        console.log("Created Session Table");
    })


     console.log("Finished setting up the database")
    return Promise.all([session]);


};
