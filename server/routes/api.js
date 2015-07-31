var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var config = require('../../knexfile.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);


/* POST search query */
router.post('/v1/subcategories', function(req, res, next) {
  knex.select('subcategories.id AS subcategory_id', 'subcategories.name AS subcategory', 'categories.id AS parentCategory_id', 'categories.name AS parentCategory')
  .from('subcategories')
  .where({
    'subcategories.name': req.body.searchItem
  })
  .join('categories', 'categories.id', 'subcategories.cat_id')
  .then(function(item) {
    res.json(item)
  })
  .catch(function(err) {
    console.error(err);
    res.json(err)
  })
});

/* GET all Subcategories */
//This returns an array of objects where each object is a category on the site.
router.get('/v1/subcategories/all', function(req, res, next) {
  knex.select('subcategories.id AS subcategory_id', 'subcategories.name AS subcategory', 'categories.id AS parentCategory_id', 'categories.name AS parentCategory')
  .from('subcategories')
  .join('categories', 'categories.id', 'subcategories.cat_id')
  .then(function(item) {
    res.json(item)
  })
  .catch(function(err) {
    console.error(err);
    res.json(err)
  })
});

/* GET all categories */
//This returns an array of objects, where each object is a catagory on the site.
//The Objects whill look like this
//{id:[number of the Category ID],name:[string of the name of the category]}

router.get('/v1/categories', function(req, res, next) {
  knex.select('id', 'name', 'img')
  .from('categories')
  .then(function(items) {
    res.json(items)
  })
});

/* GET all links within a subcategory. */
/*
{
  title: [string of the url title]
  url: [string with the URL to the submitted URL]
  votes: [integer of the number of votes for the post]
  username: [string of the user who submited the URL]
  date: [string of the date the url was submitted]
  id: [string of the id for the submited url]
  hasVoted: [string 'upvote' 'downvote' 'none']
}*/

router.get('/v1/:category/:subcategory', function (req, res, next) {
  knex.select('categories.id')
  .from('categories')
  .where({
    'categories.name': decodeURIComponent(req.params.category)
  })
  .then(function (catRow) {
    if (catRow.length) {
      var catRowId = catRow[0].id
      knex.select('subcategories.id')
      .from('subcategories')
      .where({
        'subcategories.name': decodeURIComponent(req.params.subcategory),
        'subcategories.cat_id' : catRowId
      })
      .then(function (subcategoryRow) {
        if (subcategoryRow.length) {
          var id = subcategoryRow[0].id
          knex.select('*')
          .from('links')
          .where({'subcat_id' : id })
          .then(function (links) {
            res.json(links)
          })
        } else {
          console.log("invalid subcategory name")
          res.end();
        }
      })
    }
  })
})


/* POST a link. */
router.post('/v1/submit',
  function(req,res,next) {
    console.log(req.user);
    console.log(req.session);

    next();
  }, checkLogin,
  function(req, res, next) {
    knex('links')
    .insert({
      title: req.body.title,
      url: req.body.url,
      user_id: req.user.id,
      subcat_id: req.body.subcat_id,
      votes: 0
    })
    .then(function(inserts) {
      res.json(inserts)
    })
    .catch(function(err) {
      console.error(err);
      res.json(err)
    })
  }
);

/* Create a Category */
router.post('/v1/submit/category', checkLogin, function(req, res, next) {
  // console.log("user is " + req.isAuthenticated() + "logged in");
  //This POST request should look like this:
  //{'name':[Category Name in string],img:[link to image in string format]}
  knex('categories')
  .insert({
    name: req.body.name,
    img: req.body.img
  })
  .then(function(inserts) {
    res.json(inserts)
  })
  .catch(function(err) {
    console.error(err);
    res.json(err)
  })
});


/* Create a sub-category */
router.post('/v1/submit/subcategory', checkLogin, function(req, res, next) {
  //This POST request should look like this:
  //{'name':[Sub-Category Name in string],cat_id:[Parent Category as number]}
  var subName = req.body.name
  var catId = req.body.cat_id

  knex('subcategories')
  .insert({
    name: subName,
    cat_id: catId
  })
  .then(function(inserts) {
    res.json(inserts)
  })
  .catch(function(err) {
    console.error(err);
    res.json(err)
  })
});


/* GET all subcategories within a category. */
router.get('/v1/*', function(req, res, next) {
  //Takes Category ID[number] or Category Name[string].
  //Returns a array of objects of each of the subcategories in the Parent Category
  //Objects will look like this
  //{
  //   subcategory: [string of subcategory name],
  //   subcategory_id: [number of the subcategory id],
  //   category_id: [integer of category id],
  //   parentCategory: [string of parent category name]
  //}

  var uri = req.path;
  var category = decodeURIComponent(uri.slice(4));
  //category is a number
  if (!isNaN(category)) {
    knex('subcategories')
    .where({
      cat_id: parseInt(category)
    })
    .select('id AS subcategory_id', 'name AS subcategory', 'cat_id AS category_id')
    .then(function(items) {
      res.json(items)
    })
  } else if (isNaN(category)) {
    knex.select('subcategories.id AS subcategory_id', 'subcategories.name AS subcategory', 'categories.id AS category_id', 'categories.name AS parentCategory')
    .from('subcategories')
    .where({
      'categories.name': category
    })
    .join('categories', 'categories.id', 'subcategories.cat_id')
    .then(function(item) {
      res.json(item)
    })
    .catch(function(err) {
      console.error(err);
      res.json(err)
    })
  }

});

/* POST vote for link */
//This will submit a vote to the database, for the provided link.
//Object should be formatted like this:
// {vote:[number either 1 or -1 ], link_id: [number the link_id of the link]}

router.post('/v1/link/vote', checkLogin, function(req, res, next) {
  knex('votes').select().where({
    link_id: req.body.link_id,
    user_id: req.user.id
  })
  .then(function(exists) {
    console.log(exists.length)
    if (exists.length === 0) {
      knex('votes')
      .insert({
          link_id: req.body.link_id,
          user_id: req.user.id,
          votes: req.body.vote
      })
      .then(function(items) {
        knex('votes').sum('votes AS total').where({
          link_id: req.body.link_id
        })
        .then(function(vote_count) {
          knex('links').update({
            votes: vote_count[0].total
          })
          .where({
            id: req.body.link_id
          })
          .catch(function(err) {
            console.error(err);
          })
        })

        res.json(items)
      })
    } else {
      knex('votes')
      .update({
        votes: req.body.vote
      })
      .where({
        link_id: req.body.link_id,
        user_id: req.user.id,
      })
      .then(function(items) {
        knex('votes').sum('votes AS total')
        .where({
          link_id: req.body.link_id
        })
        .then(function(vote_count) {
          knex('links').update({
            votes: vote_count[0].total
          })
          .where({
            id: req.body.link_id
          })
          .catch(function(err) {
            console.error(err);
          })
        })
        res.json(items)
      })
    }
  })

});

router.post('/v1/signup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  bcrypt.hash(password, null, null, function(error, result) {
    console.error(error)
    knex('users')
    .where({
        name: username
    })
    .select('name')
    .then(function(rows) {
      if (rows.length === 0) {
        knex('users')
        .insert({
          name: username,
          password: result
        })
        .then(function() {
          res.json({
            "status": "Success",
            "message": "User Created Successfully"
          })
        })
        .catch(function(err) {
          console.error(err);
          res.writeHead(401)
          res.json(err)
        })
      } else {
        res.json({
          "message": "user already exists"
        })
      }
    })
  })
});

router.post('/v1/signin',
  function(req, res, next) {
    console.log("req.body", req.body);
    next();
  },
  passport.authenticate('local'),
  function(req, res, next) {
    console.log("req.user", req.user);
    res.json(req.user);
  }
);

function checkLogin (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.end('Please Login');
  }
}

module.exports = router;
