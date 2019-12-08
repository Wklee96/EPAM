const database = {};

database.queries = {
  get_bond_type: "SELECT * FROM bonds WHERE bond_type=$1;",

  insert_bond: "INSERT INTO bonds VALUES ($1, $2, $3, $4, $5, $6);"
};

module.exports = database;
