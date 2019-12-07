var express = require("express");
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

var get_bond_type = sqlQueries.queries.get_bond_type;

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("investors");
});

router.get("/:type", function(req, res, next) {
  pool.query(get_bond_type, [req.params.type], function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.render("investmentType", { data: data.rows });
    }
  });
});

module.exports = router;
