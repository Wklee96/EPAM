const database = {};

database.queries = {
  get_bond_type: "SELECT * FROM bonds WHERE bond_type=$1;"
};

module.exports = database;
