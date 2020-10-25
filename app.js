const inquirer = require("inquirer");
const employeeDB = require("./lib/employeeDB");
const dotenv = require('dotenv');

dotenv.config();


employeeDB.getEmployees();
