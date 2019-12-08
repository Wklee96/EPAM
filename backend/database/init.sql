DROP TABLE IF EXISTS bonds CASCADE;

CREATE TABLE bonds (
    issuer TEXT PRIMARY KEY,
    grade TEXT NOT NULL,
    maturity_date TEXT NOT NULL,
    coupon NUMERIC NOT NULL,
    agency TEXT NOT NULL,
    bond_type TEXT NOT NULL
);
