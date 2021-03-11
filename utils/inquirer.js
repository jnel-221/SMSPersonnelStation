const inquirer = require("inquirer");
const { getRoles } = require("../app");

const displayOptions = {
  type: "list",
  name: "options",
  message: "What would you like to do?",
  choices: [
    "View all employees",
    "View all employees by department",
    "View all employees by manager",
    "Add department",
    "Add role",
    "Add employee",
    "Remove employee",
    "Update employee role",
    "Update employee manager",
  ],
  default: "View all employees",
};

const displayDepartment = {
  type: "list",
  name: "options",
  message: "Which Department would you like to see?",
  choices: [],
};

const createEmployee = [
  {
    type: "input",
    name: "first_name",
    message: "What is employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is employee's last name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is employee's role?",
    choices: [
      getRoles,
      // "RN (Hem/Onc)",
      // "RN (Rad/Onc)",
      // "MD (Hem/Onc)",
      // "MD (Rad/Onc)",
      // "MA",
      // "F/O Coordinator",
      // "A/R Specialist",
      // "Coding Specialist",
      // "Manager",
      // "Practice Administrator",
    ],
  },
  // {
  //   type: "list",
  //   name: "manager",
  //   message: "Who is the employee's manager?",
  //   choices: ["none", "Leon Baker", "Susan Nguyen", "Diane Mitchell"],
  // },
];

const createDepartment = {
  type: "input",
  name: "name",
  message: "What is the department name?",
};

const createRole = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the role?",
  },
  {
    type: "input",
    name: "salary",
    message:
      "Please enter desired salary for role.  Salary should be numeric value, no commas and include two decimal places.",
  },
  {
    type: "list",
    name: "deptid",
    message: "Please select department ID for role",
    choices: [1, 2, 3, 4, 5],
  },
];

module.exports = {
  displayOptions,
  createEmployee,
  createDepartment,
  createRole,
};
