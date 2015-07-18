var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

///REQUIREMENTS FOR AUTHENTICATION
var passport = require('passport')
var util = require('util')
var LocalStrategy = require('passport-local').Strategy
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var authController = require('./public/Auth/auth_controllers.js')
var users = require('./server/routes/users');

var routes = require('./server/routes/index');
// var db = require('./server/models/database.js')
var config = require('./knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);
var app = express();

knex.migrate.latest([config]);

// var env = process.env.NODE_ENV || 'development';



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/scripts', express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'public')));

//AUTHENTICATION INIT
app.use(flash());
app.use(express.session({ secret: 'ReQdAtBoDy' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
