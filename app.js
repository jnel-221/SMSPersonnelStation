const mysql = require("mysql");
require("dotenv").config();
const figlet = require("figlet");
const cTable = require("console.table");

const inquirer = require("inquirer");
const {displayOptions, createEmployee }= require("./utils/inquirer");
const { connectionDescrip } = require("./lib/viewFunctions");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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

function runQuestions() {
  inquirer
    .prompt(displayOptions)
    .then((answer) => {
      console.log(answer.options, "are you defined?");
      switch (answer.options) {
        case "View all employees":
          console.log(answer.options, "are you defined?");
          displayCompleteTable();
          break;

        // case "View all employees by department":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        // case "View all employees by manager":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        // case "Add employee":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        // case "Remove employee":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        // case "Update employee role":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        // case "Update employee manager":
        //   console.log(answer.options, "are you defined?");
        //   //function goes here
        //   break;

        default:
          console.log(`Invalid action: ${answer.options}`);
          break;
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
}

function displayCompleteTable() {
  console.log("Creating department table...\n");

  const sql =
    "SELECT empid, first_name, last_name, title, salary, dept_name FROM employee INNER JOIN role on employee.roleid = role.roleid INNER JOIN department ON role.deptid = department.deptid";
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
    console.table(res);
  });
  runQuestions();
}

// function displayDepartments() {
//   console.log("Creating list of departments...");

//   const sql = "SELECT dept_name";
// }

// function displayEmployeebyDepartment(department){
//   console.log("Creating table of Employees by Department...")
//   const sql =  `SELECT empid, first_name, last_name, title, salary, name FROM employee INNER JOIN role on employee.roleid = role.roleid INNER JOIN department ON role.deptid = department.deptid WHERE deptid = ${department}`;
//   connection.query(sql, function(err,res){
//     if (err) throw err;

//   })
// }

module.exports = connection;
