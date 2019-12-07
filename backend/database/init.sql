DROP TABLE IF EXISTS bonds CASCADE;

CREATE TABLE bonds (
    issuer TEXT PRIMARY KEY,
    grade TEXT NOT NULL,
    duration TEXT NOT NULL,
    interest_rates NUMERIC NOT NULL,
    predictive_accuracy NUMERIC NOT NULL
);