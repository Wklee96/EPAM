DROP TABLE IF EXISTS bonds CASCADE;

CREATE TABLE bonds (
    issuer TEXT PRIMARY KEY,
    grade TEXT NOT NULL,
    maturity_date TEXT NOT NULL,
    coupon NUMERIC NOT NULL,
    agency TEXT NOT NULL,
    bond_type TEXT NOT NULL
);

INSERT INTO bonds VALUES ('联想', 'AA', '1/13/2020', 5.7, '联合资信评估有限公司', 'bank');
INSERT INTO bonds VALUES ('武汉地铁', 'AA', '4/7/2020', 5.5, '中诚信国际信用评级', 'bank');
INSERT INTO bonds VALUES ('中国石油天然气集团公司', 'AAA', '1/13/2020', 4.5, '大公国际资信评估有限公司', 'bank');
INSERT INTO bonds VALUES ('翔宇实业集团有限公司', 'BB', '1/13/2020', 8.8, '联合资信评估有限公司', 'bank');
INSERT INTO bonds VALUES ('盛屯矿业集团股份有限公司', 'BBB', '4/1/2023', 7.7, '联合资信评估有限公司', 'bank');
INSERT INTO bonds VALUES ('中国石油化工股份有限公司', 'AAA', '1/13/2022', 4.9, '联合资信评估有限公司', 'bank');