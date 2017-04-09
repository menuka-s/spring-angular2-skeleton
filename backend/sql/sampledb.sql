DROP DATABASE IF EXISTS 'sampledb';

CREATE DATABASE IF NOT EXISTS 'sampledb';
USE 'sampledb';

CREATE TABLE IF NOT EXISTS 'users' (
    'user_id' int NOT NULL AUTO_INCREMENT,
    'name' varchar(10) NOT NULL,
    PRIMARY KEY ('user_id')
);

INSERT INTO 'users' ('user_id', 'name') VALUES
    (1, 'Bob'),
    (2, 'Joe');