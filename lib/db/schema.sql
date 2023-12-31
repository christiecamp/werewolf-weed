-- drops database if it exists --
DROP DATABASE IF EXISTS werewolf_db;
-- creates database --
CREATE DATABASE werewolf_db;

-- use database --
USE werewolf_db;
-- create tables within database --

-- tables --
CREATE TABLE department (
     -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    -- Makes a string column called "name" which cannot contain null --
    name VARCHAR(30) NOT NULL,
    ON DELETE CASCADE ON UPDATE CASCADE
    -- ALTER TABLE department AUTO_INCREMENT = 7
);

-- role table --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    -- decimal number with maximal total precision of 10 digits - two after decimal --
    salary DECIMAL(10,2) NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- employee table --
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    FOREIGN KEY (role_id)
        REFERENCES role (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);
