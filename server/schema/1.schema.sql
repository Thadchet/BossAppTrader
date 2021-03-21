CREATE DATABASE IF NOT EXISTS `data` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `mycrypto`;

CREATE TABLE IF NOT EXISTS MyCrpyto (
    ID int NOT NULL AUTO_INCREMENT,
    NameCoin varchar(255),
    Amount varchar(255),
    Price varchar(255),
    PRIMARY KEY (ID)
);
