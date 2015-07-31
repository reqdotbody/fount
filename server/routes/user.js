
var config = require('../../knexfile.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Promise = require('bluebird');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);

var user = {};

user.getMyPosts = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.json("You are not logged in");
  } else {
    var userId = req.user.id;
    knex.select('*')
    .from('links')
    .where({
      'user_id' : userId
    })
    .then(function(links) {
      res.json(links);
    })
    .catch(function(err) {
      console.log("error in getMyPosts", err);
      res.json(err);
    })
  }
}

user.getMySubcategories = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.json("You are not logged in");
  } else {
    var userId = req.user.id;
    knex.select('subcat_id')
    .from('follows')
    .where({
      user_id : userId
    })
    .then(function(followRows) {
      console.log(followRows);
      var fr = followRows.map(function(row) {
        return knex.select('name as subcategory', 'cat_id')
          .from('subcategories')
          .where({
            id : row.subcat_id
          })
      })

      Promise.all(fr)
      .then(function(values) {
        //console.log(values);
        var cr = values.map(function(subcatRowArr) {
          var subcatRow = subcatRowArr[0];
          return knex.select('name as category')
            .from('categories')
            .where({
              id : subcatRow.cat_id
            })
        })

        Promise.all(cr)
        .then(function(results) {
          console.log(values);
          console.log(results);
          var pairs = [];
          for(var i=0; i<values.length; i++) {
            pairs.push({
              subcategory : values[i][0].subcategory,
              category : results[i][0].category
            })
          }
          console.log("pairs", pairs);
          res.json(pairs);
        })
      })
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    })
  }
}

user.getMySubcategories = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.json("You are not logged in");
  } else {
    knex('follows')
    .join('subcategories', 'follows.subcat_id', '=', 'subcategories.id')
    .join('categories', 'subcategories.cat_id', '=', 'categories.id')
    .select('categories.name as Category', 'subcategories.name as Subcategory')
    .then(function(results) {
      console.log(results);
      res.json(results);
    })
  }
}

user.followSubcategory = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.json("You are not logged in");
  } else {
    var userId = req.user.id;
    var subcatId = req.body.subCategoryId;

    knex.select('user_id', 'subcat_id')
    .from('follows')
    .where({
      user_id : userId,
      subcat_id : subcatId
    })
    .then(function (results) {
      if (results.length > 0) {
        res.json("you are already following that subcategory")
      } else {
        knex('follows')
        .insert({
          user_id : userId,
          subcat_id : subcatId
        })
        .then(function(inserts) {
          res.json("successfully followed a subcategory");
        })
        .catch(function(err) {
          console.error(err);
          res.json(err)
        });
      }
    })
  }
}

module.exports = user;
