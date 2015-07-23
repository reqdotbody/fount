var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var config = require('../../knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);


/* POST search query. */
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
router.get('/v1/*/*', function(req, res, next) {
    //TODO Return all links within a subcategory
    res.json({
        text: 'Look at me Now'
    });
});

/* POST a link. */
router.post('/v1/submit', function(req, res, next) {
    knex('links')
        .insert({
            title: req.body.title,
            url: req.body.url,
            user_id: req.body.user_id,
            subcat_id: req.body.subcat_id
        })
        .then(function(inserts) {
            res.json(inserts)
        })
        .catch(function(err) {
            console.error(err);
            res.json(err)
        })
});

/* Create a Category */
router.post('/v1/submit/category', function(req, res, next) {
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
router.post('/v1/submit/subcategory', function(req, res, next) {
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
    var category = uri.slice(4)
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

router.post('/v1/signup', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password

  bcrypt.hash(password,"FOUNT",null,function(err,hash){

    knex('users')
    .where({name: username})
    .select('name')
    .then(function(err,rows){
      if(err){
        knex('users')
        .insert({name:username,password:hash})
        .then(function() {
                res.json({"status":"Success","message":"User Created Successfully"})
            })
            .catch(function(err) {
                console.error(err);
                res.writeHead(401)
                res.json(err)
            })
      }else{
        res.writeHead(401)
        res.json({"message":"user already exists"})
      }})


  })

});

router.post('/v1/signin', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  var hash = "";
  knex('users').where({name:username}).select('id','password').then(function(err,rows){
    hash = rows[0].password
      bcrypt.compare(password,hash,null,function(err,hash){
        if(!err){
          //TODO SAVE req.sessionID and userid to the session table.
          //TODO? Implement persistant session with connect-pg-simple

          res.json({"message":"Login Successfull"})
        }
      })
  })
  .catch(function(err) {
            res.writeHead(401)
            res.json({"message":"Invalid username/password"})
        })


});

module.exports = router;
