const inquirer = require("inquirer");

const displayOptions = {
  type: "list",
  name: "options",
  message: "What would you like to do?",
  choices: [
    "View all employees",
    "View all employees by department",
    "View all employees by manager",
    "Add employee",
    "Remove employee",
    "Update employee role",
    "Update employee manager",
  ],
  default: "View all employees",
};

const createEmployee = [
  {
    type: "input",
    name: "first_name",
    message: "What is employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is employee's last name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is employee's role?",
    choices: [
      "RN (Hem/Onc)",
      "RN (Rad/Onc)",
      "MD (Hem/Onc)",
      "MD (Rad/Onc)",
      "MA",
      "F/O Coordinator",
      "A/R Specialist",
      "Coding Specialist",
      "Manager",
      "Practice Administrator",
    ],
    default: "RN (Hem/Onc)",
  },
  {
    type: "list",
    name: "manager",
    message: "Who is the employee's manager?",
    choices: ["none", "Leon Baker", "Susan Nguyen", "Diane Mitchell"],
  },
];

const createDepartment = {
  type: "input",
  name: "name",
  message: "What the department name?",
};

const createRole = [
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
    choices: [1, 2, 3, 4, 5],
  },
];

async function init() {
  const { options } = await inquirer.prompt(displayOptions);

  //add logic that takes the option variable and passes it to the appropriate function based on option chosen; will use if/else statments for this.
}

module.exports = init;
