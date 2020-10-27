const inquirer = require("inquirer");
const mysql = require('mysql');
const db = require("./lib/db")
//const employeeDB = require("./lib/employeeDB");
const dotenv = require('dotenv');

dotenv.config();


db.connect((err) => {
    if (err) throw err;
    init();
})


const greeting = () => {
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
                    getEmployees();
                    break;

                case "View all roles":
                    getRoles();
                    break;
                case "View all departments":
                    getDepartments();
                    break;
                case "Quit":
                    connection.end();
                    break;
                default:
                    connection.end();
                    console.log("Bye!")
                    break;

            }
        })
}

const init = () => {
    greeting();
}

const getEmployees = () => {
    db.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        greeting();

    });


}
const getDepartments = () => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        greeting();
    });
}
const getRoles = () => {
    db.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        console.table(res);
        greeting();
    });
}


