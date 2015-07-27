exports.up = function(knex, Promise) {


    var votes_drop = knex.schema.dropTableIfExists('votes')

    var votes_add = knex.schema.createTable('votes', function(table) {
        table.increments('id').primary();
        table.integer('link_id').references('id').inTable('links');
        table.integer('user_id').references('id').inTable('users');
        table.integer('votes');
        console.log("Created Votes Table");
    })

    console.log("Finished updating the database")
    return Promise.all([votes_drop, votes_add]);

};

exports.down = function(knex, Promise) {

};
