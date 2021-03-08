const inquirer = require('inquirer');

const displayOptions = {
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["View all employees", "View all employees by department", "View all employees by manager", "Add employee","Remove employee", "Update employee role", "Update employee manager"],
    default: "View all employees"
}

async function init(){
    const{options} = await inquirer.prompt(displayOptions);
}

module.exports = init;