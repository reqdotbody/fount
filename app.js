var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var pg = require('pg')
var pgSession = require('connect-pg-simple')(session)

var routes = require('./server/routes/index');
var api = require('./server/routes/api');
// var db = require('./server/models/database.js')
var config = require('./knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);
var app = express();
process.env.PWD = process.cwd()

knex.migrate.latest([config]);



// view engine setup

app.get('/', function(req,res){
  res.sendFile(path.join(process.env.PWD, 'public','index.html'))
});
app.use('/scripts', express.static('bower_components'));
app.use(express.static('public'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(process.env.PWD, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({ 
  secret: 'FOUNT', 
  cookie: { maxAge: 60000 }, 
  resave:true, 
  saveUninitialized:false,
  secure: false,
  store: new pgSession({
      pg : pg,                                  // Use global pg-module
      conString : config[env].connection, // Connect using something else than default DATABASE_URL env variable
      tableName : 'session'               // Use another table-name than the default "session" one
    })
  }));

app.use('/', routes);
app.use('/api', api);


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
    //new version
    res.send({
      message: err.message,
      error: err
    });
    return;

    //old version
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  //new version
  res.send({
    message: err.message,
    error: err
  });
  return;

  //old version
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});


module.exports = app;
