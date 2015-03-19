DROP DATABASE IF EXISTS address_db;
DROP USER IF EXISTS addr_user;
CREATE USER addr_user PASSWORD '123';
CREATE DATABASE address_db owner addr_user ENCODING = 'UTF-8';