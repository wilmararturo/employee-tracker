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
                "Add employee",
                "Add role",
                "Add department",
                "Update employee role",
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

                case "Add employee":
                    break;

                case "Add role":
                    break;
                case "Add department":
                    break;
                case "Update employee role":
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

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: "employeeFirstName",
                type: "input",
                message: "Enter the first name of the employee:",
            },
            {
                name: "employeeLastName",
                type: "input",
                message: "Enter the last name of the employee:",
            }
        ])
        .then(console.log(answer))

}

const addRole = () => {
    inquirer
        .prompt({
            name: "newDe",
            type: "input",
            message: "Enter the name of the new role:",
        })
        .then(console.log(answer))

}

const addRole = () => {
    inquirer
        .prompt({
            name: "newRole",
            type: "input",
            message: "Enter the name of the new role:",
        })
        .then(console.log(answer))

}
const init = () => {
    greeting();
}


