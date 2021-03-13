const connection = require("./utils/connection");
require("dotenv").config();
const figlet = require("figlet");
const cTable = require("console.table");

const inquirer = require("inquirer");
const { displayOptions } = require("./utils/inquirer");
const {
  displayCompleteTable,
  displayEmployeesByDepartment,
  displayEmployeesByManager,
} = require("./lib/viewFunctions");

const {
  addDepartment,
  addRole,
  addEmployee,
} = require("./lib/createFunctions");

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

//this is used in a lot of different places, so maybe it get's its own file?
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
      const table = await displayCompleteTable();
      console.log(table);
      //runQuestions();
      break;

    case "View all employees by department":
      displayEmployeesByDepartment();

      break;

    case "View all employees by manager":
      displayEmployeesByManager();
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
      console.log(answer.options, "are you defined?");
      //function goes here
      break;

    case "Update employee role":
      console.log(answer.options, "are you defined?");
      //function goes here
      break;

    case "Update employee manager":
      console.log(answer.options, "are you defined?");
      //function goes here
      break;

    default:
      console.log(`Invalid action: ${answer.action}`);
      break;
  }
}

module.exports.runQuestions = runQuestions;
