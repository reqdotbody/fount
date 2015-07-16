var pg = require('pg');
var path = require('path');
var knex = require('knex')({
  client: 'pg',
  connection: HEROKU_POSTGRESQL_COLOR_URL||127.0.0.1,
  ssl: true
});

knex.schema.hasTable('Categories').then(function(exists) {
  if(!exists) {
    knex.schema.createTable('Categories', function (table) {
      table.increments('id');
      table.string('name');
      table.string('img');
    })
  }
})

knex.schema.hasTable('Subcategories').then(function(exists) {
  if(!exists) {
    knex.schema.createTable('Subcategories', function (table) {
      table.increments('id');
      table.string('name');
      table.string('catID').unsigned().references('Categories.id');
    })
  }
})

knex.schema.hasTable('Links').then(function(exists) {
  if(!exists) {
    knex.schema.createTable('Links', function (table) {
      table.increments('id');
      table.integer('subcatID').unsigned().references('Subcategories.id');;
      table.string('title');
      table.string('url');
      table.integer('votes');
      table.integer('userID').unsigned().references('Users.id');
      table.timestamptz('createdAt');
    })
  }
})

knex.schema.hasTable('Users').then(function(exists) {
  if(!exists) {
    knex.schema.createTable('Users', function (table) {
      table.increments('id');
      table.string('name');
      table.string('password');
    })
  }
})

knex.schema.hasTable('Votes').then(function(exists) {
  if(!exists) {
    knex.schema.createTable('Votes', function (table) {
      table.integer('linkID').unsigned().references('Links.id');;
      table.integer('userID').unsigned().references('User.id');;
      table.integer('votes');
    })
  }
})
