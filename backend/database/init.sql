DROP TABLE IF EXISTS bonds CASCADE;

CREATE TABLE bonds (
    issuer TEXT PRIMARY KEY,
    grade TEXT NOT NULL,
    maturity_date TEXT NOT NULL,
    coupon NUMERIC NOT NULL,
    agency TEXT NOT NULL,
    bond_type TEXT NOT NULL
);
INSERT INTO bonds VALUES ('wanxin', 'A', '1/13/2020', 5.7, 'NO.1', 'NO.1');
INSERT INTO bonds VALUES ('wlx', 'A', '4/7/2020', 5.5, 'NO.1', 'NO.1');
INSERT INTO bonds VALUES ('xhn', 'A', '1/13/2020', 4.5, 'NO.1', 'NO.1');
INSERT INTO bonds VALUES ('hd', 'B', '1/13/2020', 8.8, 'NO.1', 'NO.1');
INSERT INTO bonds VALUES ('sh', 'B', '4/1/2023', 7.7, 'NO.1', 'NO.1');
INSERT INTO bonds VALUES ('nn', 'A', '1/13/2022', 4.9, 'NO.1', 'NO.1');