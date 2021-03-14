const inquirer = require("inquirer");

const displayOptions = {
  type: "list",
  name: "options",
  message: "What would you like to do?",
  choices: [
    "View all employees",
    "View all employees by department",
    "View all employees by manager",
    "View all Departments",
    "View all Roles",
    "Add department",
    "Add role",
    "Add employee",
    "Remove employee",
    "Update employee role",
    "Update employee manager",
  ],
  default: "View all employees",
};

const createDepartment = {
  type: "input",
  name: "name",
  message: "What is the department name?",
};

module.exports = {
  displayOptions,

  createDepartment,
};
