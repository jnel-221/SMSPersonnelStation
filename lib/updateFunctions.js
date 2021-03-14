const connection = require("../utils/connection");
const inquirer = require("inquirer");
const runQuestions = require("../app");

//updateEmployee manager function
function updateEmployeeManager() {
  const allStaff = [];
  const sql = "SELECT empid, first_name, last_name FROM employee";

  connection.query(sql, async function (err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      let choices = `${res[i].empid} ${res[i].first_name} ${res[i].last_name}`;
      allStaff.push(choices);
    }

    const { empid, mngrid } = await inquirer.prompt([
      {
        type: "list",
        name: "empid",
        message: "Which Employee do you want to update?",
        choices: allStaff,
      },
      {
        type: "list",
        name: "mngrid",
        message: "Which Manager do you want to assign to this employee?",
        choices: allStaff,
      },
    ]);

    let empIdNum = empid.substring(0, 2);
    let mngrIdNum = mngrid.substring(0, 2);

    const sql3 = `UPDATE employee SET mngrid = ?WHERE empid = ?`;

    connection.query(sql3, [mngrIdNum,empIdNum], function (err, res) {
      if (err) throw err;
      console.log(`Your employee's manager has been updated!`);

      runQuestions.runQuestions();
    });
  });
}

//create updateEmployee department function

//create updateEmployee role function
module.exports = {
  updateEmployeeManager,
};
