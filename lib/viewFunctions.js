//create function that displays a table in console containing combined data of all tables
const connection = require("../app");

function readTables() {
  console.log("Creating department table...\n");

  const sql =
    "SELECT empid, first_name, last_name, title, salary, name FROM employee INNER JOIN role on employee.roleid = role.roleid INNER JOIN department ON role.deptid = department.deptid";
  connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log("did I get here?", res);
  });
}

//create a function that displays all employees in a given department
//create a function that displays all employees by manager
module.exports = readTables;
