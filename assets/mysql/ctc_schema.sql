DROP DATABASE IF EXISTS ctc_db;

CREATE DATABASE ctc_db;

USE ctc_db;

CREATE TABLE department(
deptid INT AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY(deptid)
);

CREATE TABLE role(
    roleid INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(9,2),
    deptid INT,
    PRIMARY KEY(roleid),
    FOREIGN KEY(deptid) REFERENCES department(deptid)
);

CREATE TABLE employee(
    empid INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roleid INT,
    mngrid INT REFERENCES employee(empid),
    PRIMARY KEY(empid),
    FOREIGN KEY(roleid) REFERENCES role(roleid),
);