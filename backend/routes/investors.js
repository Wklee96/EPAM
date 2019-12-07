var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('investors');
});

router.get('/:type', function(req, res, next) {
  res.render('investmentType');
})

module.exports = router;
