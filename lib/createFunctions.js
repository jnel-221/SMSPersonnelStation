const connection = require("../utils/connection");
const inquirer = require("inquirer");
const runQuestions = require("../app");
const {
  createDepartment,
  createRole,
  createEmployee,
} = require("../utils/inquirer");

// addDepartment function
async function addDepartment() {
  const { name } = await inquirer.prompt(createDepartment);
  console.log(typeof name);
  const sql = `INSERT INTO department (dept_name) VALUES (?)`;

  connection.query(sql, [name], function (err, res) {
    if (err) throw err;
    console.log(`Your new department ${res} has been added!`);

    runQuestions.runQuestions();
  });
}

//addRole function

function addRole() {
  let allDepts = [];
  const sql = "SELECT deptid, dept_name FROM department";

  connection.query(sql, async function (err, res) {
    if (err) throw err;

    console.log(res);
    for (var i = 0; i < res.length; i++) {
      let choices = `${res[i].deptid} ${res[i].dept_name}`;

      allDepts.push(choices);
    }

    const { title, salary, deptid } = await inquirer.prompt([
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
        choices: allDepts,
      },
    ]);


    let idNum = deptid.substring(0,1);

    const sql2 = `INSERT INTO role (title, salary, deptid) VALUES (?,?,?)`;

    connection.query(sql2, [title, salary, idNum], function (err, res) {
      if (err) throw err;
      console.log(`Your new role ${title} has been added!`);

      runQuestions.runQuestions();
    });
  });
}

//create addEmployee function
// async function addEmployee() {
//   const { first_name, last_name } = await inquirer.prompt(createEmployee);
//    switch(role){
//      case role
// }

// const sql = `INSERT INTO employee (first_name, last_name) VALUES (${first_name}, ${last_name})`;
// console.log(sql);
// connection.query(sql, function (err, res) {
//   if (err) throw err;
//   console.log(res);
//   //console.table(res);
// });
// runQuestions.runQuestions();



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

module.exports = {
  addDepartment,
  addRole,
  addEmployee,
};
