const connection = require("../utils/connection");
const inquirer = require("inquirer");
const runQuestions = require("../app");
const { createDepartment, createRole, createEmployee } = require("../utils/inquirer");

//create addDepartment function
async function addDepartment() {
  const  {name}  = await inquirer.prompt(createDepartment);
  console.log(typeof name);
  const sql = `INSERT INTO department (dept_name) VALUES (?)`;
  
  connection.query(sql,[
    name
  ], function (err, res) {
    if (err) throw err;
    console.log(`Your new department ${res} has been added!`);      
    
    runQuestions.runQuestions();
  });
}

//create addRole function

function addRoll() {
    let choices;
    const sql= "SELECT dept_id, dept_name FROM department"

    connection.query(sql, async function (err, res) {
        if (err) throw err;
        choices = res;

    });

    const  {title, salary, deptid}  = await inquirer.prompt(createRole);
    console.log(typeof );
    const sql2 = `INSERT INTO role (title, salary, deptid) VALUES (?)`;
    
    connection.query(sql2,[
      title, salary, deptid
    ], function (err, res) {
      if (err) throw err;
      console.log(`Your new role ${res} has been added!`);      
      
      runQuestions.runQuestions();
    });
  }

//create addEmployee function

//add "create" functions
//async function addEmployee() {
//const { first_name, last_name } = await inquirer.prompt(createEmployee);
//  switch(role){
//    case role
//  }

// const sql = `INSERT INTO employee (first_name, last_name) VALUES (${first_name}, ${last_name})`;
// console.log(sql);
// connection.query(sql, function (err, res) {
//   if (err) throw err;
//   console.log(res);
//   //console.table(res);
// });
// runQuestions.runQuestions();

//runQuestions();

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
};
