exports.up = function(knex, Promise) {

    var categories = knex.schema.createTable('categories', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('img');
        console.log("Created Catagories Table");
    })

    var users = knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('password');
        console.log("Created Users Table");
    })


    var subcategories = knex.schema.createTable('subcategories', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('cat_id').references('id').inTable('categories');
        console.log('Created Subcategories Table');
    })

    var links = knex.schema.createTable('links', function(table) {
        table.increments('id').primary();
        table.integer('subcat_id').references('id').inTable('subcategories');
        table.string('title');
        table.string('url');
        table.integer('votes');
        table.integer('user_id').references('id').inTable('users');
        table.timestamp('created_at');
        console.log("Created Links Table");
    })

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

exports.down = function(knex, Promise) {
    knex.schema.dropTable('categories').dropTable('users').dropTable('subcategories').dropTable('links').dropTable('votes')
};
