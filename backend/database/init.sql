DROP TABLE IF EXISTS bonds CASCADE;

CREATE TABLE bonds (
    issuer TEXT PRIMARY KEY,
    grade TEXT NOT NULL,
    maturity_date TEXT NOT NULL,
    coupon NUMERIC NOT NULL,
    predictive_accuracy NUMERIC NOT NULL,
    bond_type TEXT NOT NULL
);

INSERT INTO bonds VALUES ('Virgolino de Oliveira Finance Ltd.', 'D', '1/13/2020', 10.875, 95.4, 'bank');
INSERT INTO bonds VALUES ('New World Resources N.V.', 'Ca', '4/7/2020', 9.000, 91.3, 'bank');
INSERT INTO bonds VALUES ('European Investment Bank (EIB)', 'A', '1/13/2020', 6.500, 99.4, 'bank');
