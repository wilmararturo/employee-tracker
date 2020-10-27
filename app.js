const inquirer = require("inquirer");
const mysql = require('mysql');
const db = require("./lib/db")
const employeeDB = require("./lib/employeeDB");
const dotenv = require('dotenv');

dotenv.config();


db.connect((err) => {
    if (err) throw err;
    init();
})


const greeting = async () => {
    inquirer
        .prompt({
            name: "activity",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all roles",
                "View all departments",
                "Quit"
            ]
        })
        .then((answer) => {
            switch (answer.activity) {
                case "View all employees":
                    employeeDB.getTableData("employee", greeting);

                    break;

                case "View all roles":
                    employeeDB.getTableData("role", greeting);

                    break;
                case "View all departments":
                    employeeDB.getTableData("department", greeting);

                    break;
                case "Quit":
                    employeeDB.close();
                    break;
                default:
                    employeeDB.close();
                    console.log("Bye!")
                    break;

            }
        })
}

const init = () => {
    greeting();
}


