-- Clear if exists then create
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- Use the DB
USE employee_db;
-- Create tables
-- Department
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);
-- Role
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2),
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);
-- Employee
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)
);
-- Sample data
-- Departments
INSERT INTO department (name)
VALUES("Finance"),
("Operations"),
("Facilities"),
("Technology"),
("Marketing");
-- Roles with department
INSERT INTO role (title, salary, department_id)
VALUES(
        "Comptroller",
        250000,
        (
            SELECT id
            FROM department
            WHERE name = 'Finance'
        )
    ),
    (
        "Chief Financial Officer",
        300000,
        (
            SELECT id
            FROM department
            WHERE name = 'Finance'
        )
    ),
    (
        "Front-End Engineer",
        150000,
(
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    );
-- Employees with role and manager
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES(
        "Bob",
        "Dobalina",
        (
            SELECT id
            FROM role
            WHERE title = 'Comptroller'
        ),
        1
    );