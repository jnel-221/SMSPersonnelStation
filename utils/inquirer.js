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
    "Add department",
    "Add role",
    "Add employee",
    "Remove employee",
    "Update employee role",
    "Update employee manager",
  ],
  default: "View all employees",
};

//not in use
// const displayDepartment = {
//   type: "list",
//   name: "options",
//   message: "Which Department would you like to see?",
//   choices: [],
// };

const createDepartment = {
  type: "input",
  name: "name",
  message: "What is the department name?",
};

module.exports = {
  displayOptions,

  createDepartment,
};
