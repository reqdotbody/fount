var LocalStrategy   = require('passport-local').Strategy;

//REQUIRE USER MODEL?

//REQUIRE DATABASE?
var database = require();
//CONNECT TO DATABSE
var connection = 
    });

//QUERY DATABASE?
connection.query();  

// expose  function to our app using module.exports
module.exports = function(passport) {

    // SERIALIZE USER
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    //DESERIALIZE USER
    passport.deserializeUser(function(id, done) {
        connection.query("select * from users where id = "+id, function(err,rows){ 
          done(err, rows[0]);
            });
    });

    //LOCAL SIGN UP BEGIN
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, username, password, done) {
      connection.query("select * from users where username = '"+username+"'",function(err,rows){
          console.log(rows);
            if (err)
                return done(err);
            if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                } else {
            // if there is no user with that username

            //DATABASE
                var newUser = new Object();
                
                newUser.username = username;
                newUser.password = password; // use bcrypt once able to insert
              
                var insertQuery = "INSERT INTO users ( username, password ) values ('" + email +"','"+ password +"')";
                console.log(insertQuery);
                connection.query(insertQuery, function(err,rows){
                    newUser.id = rows.insertId;
                    
                    return done(null, newUser);
                }); 
        } 
      });
    }));

    
    //LOCAL LOGIN BEGIN
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, username, password, done) { 
        connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
          if (err)
            return done(err);
          if (!rows.length) {
            return done(null, false, req.flash('loginMessage', 'No user found.'));
          }
          if (rows[0].password !== password){
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
            }
          return done(null, rows[0]);     
        });
    }));
 };