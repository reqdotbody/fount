
var config = require('../../knexfile.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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

user.followSubcategory = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.json("You are not logged in");
  } else {
    var userId = req.user.id;
    var subcatId = req.body.subCategoryId;
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
    })

  }
}

module.exports = user;