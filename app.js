const mysql = require("mysql");
require("dotenv").config();
const figlet = require("figlet");

const inquirer = require("inquirer");
const runQuestions = require("./utils/inquirer");

const connection = mysql.createConnection({
  //Your host
  host: process.env.DB_HOST,
  // Your port
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_USER,

  // Your password
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

module.exports = connection;
