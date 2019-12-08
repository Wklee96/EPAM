const database = {};

database.queries = {
  get_bond_type: "SELECT issuer, grade, maturity_date, coupon, agency, bond_type, digest(issuer::TEXT, 'sha256')::TEXT as hash, digest(coupon::TEXT, 'sha256')::TEXT as prehash FROM bonds WHERE bond_type=$1;",

  insert_bond: "INSERT INTO bonds VALUES ($1, $2, $3, $4, $5, $6);"
};

module.exports = database;
