var express = require('express');
var router = express.Router();
const sqlQueries = require("../database/queries");

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "w2001218",
  port: 5432
});

var insert_bond = sqlQueries.queries.insert_bond;

/* GET users listing. */
router
.get('/', function(req, res, next) {
  console.log(1);
  res.render("request");
})
.post('/', function(req, res, next) {//没有捕捉到对象
  console.log(1);
  console.log(req.body);
  var ratings = ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B', 'A'];
  var coupon = Number(req.body.coupon);
  console.log(coupon);
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

  var agencies = ['No. 1', 'Bank womens and children', 'tumor', 'Cancer hospital', 'mental hospital'];
  var agency = agencies[getRandomInt(0,3)];
  pool.query(insert_bond, [req.body.issuer, finalRating, req.body.maturity_date, coupon, agency, 'hospital'], function(err, data) {
    if (err) {
      //res.status(404).send();
      console.log(err)
    } else {
      setTimeout(() => {
        console.log(1);
        res.redirect("/hetong/");
      }, 0);
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
