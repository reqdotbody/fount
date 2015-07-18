
var express = require('express');
var router = express.Router();

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

module.exports = router;