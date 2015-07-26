//Database (The number preceding this file acknowledges a timestamp from the last database update)

//Functionality for starting up all new database schema
exports.up = function(knex, Promise) {

//Initialize Category Database
    var categories = knex.schema.createTable('categories', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('img');
        console.log("Created Catagories Table");
    })

//Initialize Users Database
    var users = knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('password');
        console.log("Created Users Table");
    })

//Initialize Subcategory Database
    var subcategories = knex.schema.createTable('subcategories', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('cat_id').references('id').inTable('categories');
        console.log('Created Subcategories Table');
    })

//Initialize Links Database
    var links = knex.schema.createTable('links', function(table) {
        table.increments('id').primary();
        table.integer('subcat_id').references('id').inTable('subcategories');
        table.string('title');
        table.string('url');
        table.integer('votes');
        table.integer('user_id').references('id').inTable('users');
        table.timestamps();
        console.log("Created Links Table");
    })

//Initialize Votes Database
    var votes = knex.schema.createTable('votes', function(table) {
        table.increments('id').primary();
        table.integer('link_id').references('id').inTable('links');
        table.integer('user_id').references('id').inTable('users');
        table.integer('votes');
        console.log("Created Votes Table");
    })

    console.log("Finished setting up the database")
    return Promise.all([categories, users, subcategories, links, votes]);

};

//
exports.down = function(knex, Promise) {
    knex.schema.dropTable('categories').dropTable('users').dropTable('subcategories').dropTable('links').dropTable('votes')
};
