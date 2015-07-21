
var express = require('express');
var router = express.Router();
var config = require('../../knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);

//TODO: Fix the JSON Responses on successfull responses for both GET and POST requests.

/* POST search query. */
router.post('/v1/subcategories', function(req, res, next) {
  res.json({text:'hello world'});
});

/* GET all subcategories within a category. */
router.get('/v1/*', function(req, res, next) {
  res.json({text:'hello world'});
});

/* GET all founts within a subcategory. */
router.get('/v1/*/*', function(req, res, next) {
  res.json({text:'hello world'});
});

/* POST a link. */
router.post('/v1/submit', function(req, res, next) {
  res.json({text:'hello world'});
});

/* Create a Category */
router.post('/v1/submit/category', function(req, res, next) {
  //This POST request should look like this:
  //{'name':[Category Name in string],img:[link to image in string format]}
  //NOTE We are not handling the images yet.
  knex('categories').insert({name:req.body.name,img:req.body.img}).catch(function(err) {
    console.error(err);
  })
  res.json({text:'hello world'});
});

/* Create a sub-category */
router.post('/v1/submit/subcategory', function(req, res, next) {
  //This POST request should look like this:
  //{'name':[Sub-Category Name in string],cat_id:[Parent Category as either string, or number(number preferred)]}
  var subName = req.body.name
  var catId = req.body.cat_id
  if(typeof catId === 'string'){
    knex('categories').where({name:catId}).select('id').then(
      function(id){
        knex('subcategories').insert({name:subName,cat_id:id[0].id}).catch(function(err) {
    console.error(err);
  })
      })
  }
    else if (typeof catId === 'number'){
      knex('subcategories').insert({name:subName,cat_id:catId}).catch(function(err) {
    console.error(err);
  })
    }

  res.json({text:'hello world'});
});


module.exports = router;