const mysql = require("mysql");
const connection = require("../app");

//create functions that display tables in console
function connectionDescrip() {
  console.log("you made it to view functions", connection);
}
// function displayEmployeesByDepartment(department){
//   console.log ("Creating table of Employees by Department")
//   const sql= "SELECT empid, first_name, last_name, title, salary, name FROM employee INNER JOIN role on employee.roleid = role.roleid INNER JOIN department ON role.deptid = department.deptid"

// }

//create a function that displays all employees in a given department
//create a function that displays all employees by manager
module.exports = {
  connectionDescrip,
};
