--@block
SELECT * from USER;

--@block
DELETE from USER;

--@block
DELETE FROM USER
WHERE username="abelabebe";

--@block
-- DROP TABLE USER;
CREATE TABLE user(
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(username)
);

--@block
CREATE TABLE IF NOT EXISTS cvv(
    fname VARCHAR(225),
    lname VARCHAR(225)
);

--@block
SELECT * FROM cvv;


--@block
CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


--@block
SELECT * from job;

--@block
DROP TABLE job;

--@block
DELETE from job;

--@block
DELETE from job ORDER BY id DESC LIMIT 1;

--@block
CREATE TABLE job(
    id INT PRIMARY KEY AUTO_INCREMENT,
    logo VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    jobRole VARCHAR(255) NOT NULL,
    jobType VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    user VARCHAR(255) NOT NULL
);

--@block
DROP TABLE cv;

--@block
CREATE TABLE cv(
    user VARCHAR(255) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    num INT NOT NULL,
    age INT NOT NULL,
    profession VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipcode INT,
    socialmedia VARCHAR(255),
    jobTitle VARCHAR(255),
    employer VARCHAR(255),
    jobStartDate VARCHAR(255),
    jobEndDate VARCHAR(255),
    schoolName VARCHAR(255),
    schoolLocation VARCHAR(255),
    schoolStartDate VARCHAR(255),
    schoolEndDate VARCHAR(255),
    degree VARCHAR(255),
    skill1 VARCHAR(255),
    level1 VARCHAR(255),
    skill2 VARCHAR(255),
    level2 VARCHAR(255),
    skill3 VARCHAR(255),
    level3 VARCHAR(255),
    firstLanguage VARCHAR(255),
    fLanguagelevel VARCHAR(255),
    secondLanguage VARCHAR(255),
    sLanguagelevel VARCHAR(255),
    fReferenceName VARCHAR(255),
    fReferencePhone VARCHAR(255),
    sReferenceName VARCHAR(255),
    sReferencePhone VARCHAR(255),
    tReferenceName VARCHAR(255),
    tReferencePhone VARCHAR(255)
);

--@block
SELECT * from cv;

--@block
DELETE from cv;