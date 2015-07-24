
exports.up = function(knex, Promise) {

//Initialize session storage
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

exports.down = function(knex, Promise) {
  
};
