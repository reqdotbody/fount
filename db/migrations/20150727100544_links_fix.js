
exports.up = function(knex, Promise) {
	//Initialize Users Database
  
  var links_drop = knex.schema.table('links', function(table){
  		table.dropColumn('created_at');
  		console.log("Drop created_at column");
  	})
  var links_add = knex.schema.table('links', function(table){
  		table.timestamp('created_at').defaultTo(knex.raw('now()'));
  		console.log("Created created_at column");
  	})
  console.log("Finished updating the database")
  return Promise.all([links_drop,links_add]);
};

exports.down = function(knex, Promise) {
  
};
