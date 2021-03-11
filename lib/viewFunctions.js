const connection = require("../utils/connection");
const inquirer = require("inquirer");
const runQuestions = require("../app");


//display complete table:
function displayCompleteTable() {
  console.log("Creating department table...\n");

  const sql =
    "SELECT empid, first_name, last_name, title, salary, dept_name FROM employee INNER JOIN role on employee.roleid = role.roleid INNER JOIN department ON role.deptid = department.deptid";
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.table(res);
    runQuestions.runQuestions();
  });
}

function displayEmployeesByDepartment() {
  console.log("Creating list of departments...");
  let choices;
  const sql = "SELECT deptid, dept_name FROM department";
  connection.query(sql, async function (err, res) {
    if (err) throw err;
    choices = res;
    const allDepts = choices.map((res) => res.dept_name);

    const { options } = await inquirer.prompt({
      type: "list",
      name: "options",
      message: "Which Department would you like to see?",
      choices: allDepts,
    });
    console.log(options);
    switchRole(options);
  });
}

function displayEmployeesByManager() {
  console.log("Creating list of managers...");
  let allMngers = [];
  const sql = "SELECT first_name, last_name FROM employee WHERE empid = mngrid";
  connection.query(sql, async function (err, res) {
    if (err) throw err;
    
    for (var i = 0; i < res.length; i++) {
      let choices = `${res[i].first_name} ${res[i].last_name}`;
      allMngers.push(choices);
      
    }

    const { options } = await inquirer.prompt({
      type: "list",
      name: "options",
      message: "Which Manager's team would you like to see?",
      choices: allMngers,
    });
    console.log(options);
    //switchManager(options);
  });
}

async function switchManager(mngrName){
  switch(mngrName){
    case "Leon Baker":
    let sql = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE empid = 13 `
  }
}

//create a function that displays all employees in a given department
async function switchRole(deptid) {
  switch (deptid) {
    case "Hematology/Oncology":
      let sql = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE dept_name = 'Hematology/Oncology'`;

      connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        runQuestions.runQuestions();
      });
      break;
    case "Radiation Oncology":
      let sql2 = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE dept_name = 'Radiation Oncology'`;

      connection.query(sql2, function (err, res) {
        if (err) throw err;

        console.table(res);
        runQuestions.runQuestions();
      });
      break;
    case "Front Office":
      let sql3 = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE dept_name = 'Front Office'`;

      connection.query(sql3, function (err, res) {
        if (err) throw err;

        console.table(res);
        runQuestions.runQuestions();
      });
      break;
    case "Billing":
      let sql4 = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE dept_name = 'Billing'`;

      connection.query(sql4, function (err, res) {
        if (err) throw err;

        console.table(res);
        runQuestions.runQuestions();
      });
      break;
    case "Administration":
      let sql5 = `SELECT empid, first_name, last_name, title, salary, dept_name FROM employee LEFT JOIN role ON employee.roleid = role.roleid LEFT JOIN department ON role.deptid = department.deptid WHERE dept_name = 'Administration'`;

      connection.query(sql5, function (err, res) {
        if (err) throw err;

        console.table(res);
        runQuestions.runQuestions();
      });
      break;
  }
}

//create a function that displays all employees by manager

module.exports = {
  displayCompleteTable,
  displayEmployeesByDepartment,
  displayEmployeesByManager,
};