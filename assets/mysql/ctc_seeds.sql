-- department
INSERT INTO department(name)
VALUES("Hematology/Oncology"), ("Radiation Oncology"), ("Front Office"), ("Billing"), ("Administration");

-- role
INSERT INTO role(title, salary, deptid)
VALUES("RN (Hem/Onc)", "75000.00", 1);

INSERT INTO role(title, salary, deptid)
VALUES("RN (Rad/Onc)", "85000.00", 2);

INSERT INTO role(title, salary, deptid)
VALUES("MD (Hem/Onc)", "350000.00", 1);

INSERT INTO role(title, salary, deptid)
VALUES("MD (Rad/Onc)", "420000.00", 2);

INSERT INTO role(title, salary, deptid)
VALUES("MA", "35000.00", 1);

INSERT INTO role(title, salary, deptid)
VALUES("MA", "35000.00", 2);

INSERT INTO role(title, salary, deptid)
VALUES("F/O Coordinator", "27000.00", 3);

INSERT INTO role(title, salary, deptid)
VALUES("A/R Specialist", "45000.00", 4);

INSERT INTO role(title, salary, deptid)
VALUES("Coding Specialist", "54000.00", 4);

INSERT INTO role(title, salary, deptid)
VALUES("Manager", "65000.00", 5);

INSERT INTO role(title, salary, deptid)
VALUES("Practice Administrator", "70000.00", 5);


