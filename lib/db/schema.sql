-- drops database if it exists --
DROP DATABASE IF EXISTS werewolf_DB;
-- creates database --
CREATE DATABASE werewolf_DB;

-- use database --
USE werewolf_DB;

-- create tables within database --
CREATE TABLE department (
     -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Makes a string column called "name" which cannot contain null --
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role ()
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL() NULL,
    department_id INT NOT NULL,
    FOREIGN KEY ()
    -- id --
    -- title --
    -- salary --
    -- department id --
    -- key? --
CREATE TABLE employee ()
-- employees --
    -- id --
    -- first name --
    -- last name --
    -- role id --
    -- manager id --
    -- key? --