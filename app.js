var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var pg = require('pg')
var pgSession = require('connect-pg-simple')(session)
var passportConfig = require('./server/routes/passportConfig.js')
var routes = require('./server/routes/index');
var api = require('./server/routes/api');
var config = require('./knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var user = require('./server/routes/user.js');

process.env.PWD = process.cwd()

knex.migrate.latest([config]);

STATICFILES = path.join(process.env.PWD, 'bower_components');

app.use('/app',express.static(path.join(process.env.PWD,'public','App')));

// view engine setup
app.get('/', function(req,res){
  res.sendFile(path.join(process.env.PWD, 'public','index.html'))
});

app.use(express.static(path.join(process.env.PWD,'public')));
app.use('/scripts', express.static(STATICFILES));

/* TO DO: uncomment after placing your favicon in /public */
// app.use(favicon(path.join(process.env.PWD, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(session({secret:"hi", resave:true, saveUninitialized:true}));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(passportConfig.strategy))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// app.use(session({
//   secret: 'FOUNT',
//   cookie: { maxAge: 60000 },
//   resave:true,
//   saveUninitialized:false,
//   secure: false,
//   store: new pgSession({
//       pg : pg,                            // Use global pg-module
//       conString : config[env].connection, // Connect using something other than default DATABASE_URL env variable
//       tableName : 'session'               // Use another table-name other than the default "session" one
//     })
// }));

app.use('/api', api);

app.get('/checkAuth', function(req, res, next) {
  res.json(req.isAuthenticated());
})

app.get('/logout', function(req, res, next) {
  req.logout();
  res.end();
})

app.get('/myposts', user.getMyPosts);

app.post('/follow', user.followSubcategory);

app.get('/myfollows', user.getMySubcategories);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("entered 404 error handler");
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers below

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log("entered 500 error handler");
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
    return;
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
  return;
});


module.exports = app;
