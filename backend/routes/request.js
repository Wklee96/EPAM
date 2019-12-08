var express = require('express');
var router = express.Router();
const sqlQueries = require("../database/queries");

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "epam",
  password: "postgres",
  port: 5433
});

var insert_bond = sqlQueries.queries.insert_bond;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("request");
});

router.post('/', function(req, res, next) {
  var ratings = ['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'CC', 'C'];
  var coupon = Number(req.body.coupon);
  var finalRating = "D";
  if (coupon < 5) {
    finalRating = ratings[0];
  } else if (coupon < 6) {
    var index = getRandomInt(1,2);
    finalRating = ratings[index];
  } else if (coupon < 7) {
    var index = getRandomInt(3,5);
    finalRating = ratings[index];
  } else {
    var index = getRandomInt(6, 8);
    finalRating = ratings[index];
  }

  var agencies = ['联合资信评估有限公司', '中诚信国际信用评级', '大公国际资信评估有限公司', '联合资信盛屯矿业集团股份有限公司'];
  var agency = agencies[getRandomInt(0,3)];
  pool.query(insert_bond, [req.body.issuer, finalRating, req.body.maturity_date, coupon, agency, 'bank'], function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      setTimeout(() => {
        res.redirect("investors/bank");
      }, 3000);
    }
  });
})

/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = router;
