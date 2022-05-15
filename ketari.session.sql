--@block
SELECT * from USER

--@block
-- DROP TABLE USER;
CREATE TABLE user(
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(username)
);


--@block
CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--@block
CREATE TABLE job(
    id INT PRIMARY KEY AUTO_INCREMENT,
    logo VARCHAR(255) NOT NULL,
    jobName VARCHAR(255) NOT NULL,
    jobLocation VARCHAR(255) NOT NULL,
    jobDescription VARCHAR(255) NOT NULL
);

--@block
CREATE TABLE cv(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    profession VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    zipCode VARCHAR(255) NOT NULL,
    socialMedia VARCHAR(255) NOT NULL
);


--@block
SELECT * from user;