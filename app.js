const connection = require("./utils/connection");
require("dotenv").config();
const figlet = require("figlet");
const cTable = require("console.table");

const inquirer = require("inquirer");
const { displayOptions } = require("./utils/inquirer");
const {
  displayAllDepartments,
  displayAllRoles,
  displayCompleteTable,
  displayEmployeesByDepartment,
  displayEmployeesByManager,
} = require("./lib/viewFunctions");

const {
  addDepartment,
  addRole,
  addEmployee,
} = require("./lib/createFunctions");

const { updateEmployeeManager } = require("./lib/updateFunctions");

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayLogo();
});

function displayLogo() {
  figlet("SMS Personnel Station", function (err, text) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.log(text);
    runQuestions();
  });
}

const runQuestions = () => {
  inquirer
    .prompt(displayOptions)
    .then((answer) => {
      switcher(answer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

async function switcher(answer) {
  switch (answer.options) {
    case "View all employees":
      displayCompleteTable();
      break;

    case "View all employees by department":
      displayEmployeesByDepartment();

      break;

    case "View all employees by manager":
      displayEmployeesByManager();
      break;

    case "View all Departments":
      displayAllDepartments();
      break;

    case "View all Roles":
      displayAllRoles();
      break;

    case "Add department":
      addDepartment();
      break;
    case "Add role":
      addRole();
      break;

    case "Add employee":
      addEmployee();
      break;

    case "Remove employee":
      console.log(answer.options, "This Feature is coming soon!");
      //function goes here
      break;

    case "Update employee role":
      console.log(answer.options, "This Feature is coming soon!");
      //function goes here
      break;

    case "Update employee manager":
      updateEmployeeManager();
      break;

    default:
      console.log(`Invalid action: ${answer.action}`);
      break;
  }
}

module.exports.runQuestions = runQuestions;
