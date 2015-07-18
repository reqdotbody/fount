//AUTH CONTROLLER

angular.module('fount.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth){
  $scope.user = {};

  // NOT IMPLEMENTED. FOUND ON : http://sarabinns.com/tag/passport-js-sequelize-postgresql/
  // SIGN IN?
  $scope.user.localStrategy = new PassportLocalStrategy({
    username: 'username',
    password: 'password'
  },

  function(username, password, done){
    var User = require('./User').User; // ISTO TO DO replace ./User with the database User Model Init 
    User.find({username: username}).success(function(user){
      if (!user){
        return done(null, false, { message: "We couldn't find a User by that name. Are you sure you have an account?"});
      }
      if (user.password !== password){
        return done(null, false, { message: "That password was incorrect. Try again!"});
      }
      return done(null, {username: user.username });
    });
  }
  );

  //DOES THIS NEED TO BE IN A FACTORY?
  //BCRYPT?
  $scope.validPassword = function(password){
    return this.password === password;
  };

  $scope.serializeUser = function(user, done){
    done(null, user);
  };

  $scope.deserializeUser = function(obj, done){
    done(null, obj);
  };

  $scope.signin = function () {
    //TODO 
    console.log("logged in controller");
  };

  $scope.signup = function () {
    //TODO
    console.log("signed in controller");
  };
});

