const connection = require("./utils/connection");
require("dotenv").config();
const figlet = require("figlet");
const cTable = require("console.table");

const inquirer = require("inquirer");
const { displayOptions, createEmployee } = require("./utils/inquirer");
const {
  displayCompleteTable,
  displayEmployeesByDepartment,
  displayEmployeesByManager,
} = require("./lib/viewFunctions");

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
}

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

    case "Add employee":
      console.log(answer.options, "are you defined?");
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


//add "create" functions
async function addEmployee() {
  const { first_name, last_name, role } = await inquirer.prompt(createEmployee);
  //  switch(role){
  //    case role
  //  }

  const sql = `INSERT INTO employee (first_name, last_name, role) VALUES (${first_name}, ${last_name}, ${role})`;
  console.log(sql);
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
    //console.table(res);
  });
  runQuestions();

  //runQuestions();
}

//db list retrieval functions: departments, roles, employees
// function getRoles() {
//   const sql = "SELECT roleid, title FROM role";
//   connection.query(sql, function (err, res) {
//     if (err) throw err;
//     res.forEach(({ roleid, title }) => console.log(roleid, title));
//     //console.table(res);
//   });
// }
//getRoles();

module.exports.runQuestions= runQuestions;
  //getRoles,

