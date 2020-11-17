CREATE DATABASE IF NOT EXISTS fanfitness_db;
USE fanfitness_db;
DROP TABLE IF EXISTS Games;
CREATE TABLE Games (
    gameid int NOT NULL
    teamid int NOT NULL,
    teamname varchar(255),
    city varchar(255),
    gamedate date,
    runs int,
    singles int,
    doubles int,
    triples int,
    homeruns int,
    strikeouts int,
    popOuts int,
    flyOuts int,
    groundouts int,
    steals int,
    walks int,
    doubleplays int,
    tripleplays int,
    oppsingles int,
    oppdoubles int,
    opptriples int,
    opphomeruns int,
    oppwalks int,
    opphitbypitch int,
    oppsteals int,
    oppflyouts int,
    oppgroundouts int,
    opplineouts int,
    opppopouts int,
    oppstrikeouts int,
    oppdoubleplays int,
    opptripleplays int,
    PRIMARY KEY (gameid)
);


DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    id int AUTO_INCREMENT NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Exercises;
CREATE TABLE Exercises (
    id int AUTO_INCREMENT NOT NULL,
    exercise varchar(255) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);