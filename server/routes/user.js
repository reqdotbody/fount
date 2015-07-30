
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

module.exports = user;