const inquirer = require("inquirer");
const db = require("./lib/db")
const employeeDB = require("./lib/employeeDB");
const dotenv = require('dotenv');

dotenv.config();

db.connect((err) => {
    if (err) throw err;
    init();
})

let newEmployee = {};

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
                    employeeDB.getAllEmployeeData((result) => {
                        console.table(result);
                        greeting();
                    })

                    break;

                case "View all roles":
                    employeeDB.getAllRoles((result) => {
                        console.table(result);
                        greeting();
                    });

                    break;
                case "View all departments":
                    employeeDB.getAllDepartments((result) => {
                        console.table(result);
                        greeting();
                    });

                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "Add role":
                    addRole();
                    break;
                case "Add department":
                    addDepartment();
                    break;

                case "Update employee role":
                    changeEmployeeRole();
                    break;
                case "Quit":
                    db.end();
                    break;
                default:
                    db.end();
                    console.log("Bye!")
                    break;

            }
        })
}

const addEmployee = () => {
    const departmentChoices = [];
    const query = "SELECT id,name FROM department";
    db.query(query, (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            const departmentChoice = {
                value: res[i].id,
                name: res[i].name,
            }
            departmentChoices.push(departmentChoice);
        }
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
                },
                {
                    name: "employeeDepartment",
                    type: "list",
                    message: "Select a department",
                    choices: departmentChoices
                },

            ])
            .then((answer) => {
                newEmployee = {
                    first_name: answer.employeeFirstName,
                    last_name: answer.employeeLastName,
                    department: answer.employeeDepartment,

                }

                addRoleToEmployee(newEmployee);
            })

    });

}

const addRoleToEmployee = (employeeObj) => {

    employeeDB.getRoleByDepartmentId(employeeObj.department, (result) => {
        inquirer
            .prompt([

                {
                    name: "employeeRole",
                    type: "list",
                    message: "Select a role",
                    choices: result,

                }
            ])
            .then((answer) => {
                newEmployee.role = answer.employeeRole;
                addManagerToEmployee(newEmployee);

            })

    })

}

const addManagerToEmployee = (employeeObj) => {
    employeeDB.getEmployeeChoiceList((result) => {
        inquirer
            .prompt([
                {
                    name: "managerId",
                    type: "list",
                    message: "Select a manager",
                    choices: result,
                }
            ])
            .then((answer) => {
                newEmployee.manager = answer.managerId;
                employeeDB.createEmployee(newEmployee, (result) => {
                    return result;

                });
                greeting();
            })
    })
}

const changeEmployeeRole = () => {
    let employeeId = "";
    let roleId = "";
    employeeDB.getEmployeeChoiceList((result) => {
        inquirer
            .prompt([
                {
                    name: "employee",
                    type: "list",
                    message: "Select an employee to update the employee's role",
                    choices: result,
                }
            ])
            .then((answer) => {
                employeeId = answer.employee;
                employeeDB.getRoleChoiceList((result) => {
                    inquirer
                        .prompt([
                            {
                                name: "role",
                                type: "list",
                                message: "Select a Role",
                                choices: result,
                            }
                        ])
                        .then((answer) => {
                            roleId = answer.role;
                        })
                        .then(() => {
                            employeeDB.updateEmployeeRole(employeeId, roleId, (result) => {
                                return result;
                            })

                        })
                        .then(() => {
                            greeting();
                        })
                })
            })
    })
}

const addRole = () => {
    const departmentChoices = [];
    const query = "SELECT id,name FROM department";
    db.query(query, (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            const departmentChoice = {
                value: res[i].id,
                name: res[i].name,
            }
            departmentChoices.push(departmentChoice);
        }

        inquirer
            .prompt([{
                name: "roleTitle",
                type: "input",
                message: "Enter the title of the new role:",
            }, {
                name: "roleSalary",
                type: "input",
                message: "Salary for the new role (numbers only)",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "roleDepartment",
                type: "list",
                message: "Select a department for the new role",
                choices: departmentChoices
            }

            ]

            )
            .then((answer) => {
                employeeDB.createRole(answer, (result) => {
                    return result;
                });
                greeting();
            });
    })

}

const addDepartment = () => {
    inquirer
        .prompt({
            name: "departmentName",
            type: "input",
            message: "Enter the name of the new department:",
        })
        .then((answer) => {
            employeeDB.createDepartment(answer.departmentName, (result) => {
                return result;
            });
        })
        .then(() => {
            greeting();
        });

}

const init = () => {
    greeting();
}


