db = require("./db");

class employeeDB {

    getRoleByDepartmentId(departmentId, cb) {
        const query = "SELECT id,title FROM role WHERE department_id=?"
        const roleChoices = []
        db.query(query, [departmentId], (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                const roleChoice = {
                    value: res[i].id,
                    name: res[i].title,
                }
                roleChoices.push(roleChoice);


            }

            return cb(roleChoices);
        })
    }

    getEmployeeChoiceList(cb) {
        const query = "SELECT id,first_name,last_name FROM employee";
        const employeeChoices = [];
        db.query(query, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                const employeeChoice = {
                    value: res[i].id,
                    name: `${res[i].first_name} ${res[i].last_name}`
                }
                employeeChoices.push(employeeChoice);
            }
            return cb(employeeChoices);

        })
    }

    getRoleChoiceList(cb) {
        const query = "SELECT id,title FROM role";
        const roleChoices = [];
        db.query(query, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                const roleChoice = {
                    value: res[i].id,
                    name: res[i].title,
                }
                roleChoices.push(roleChoice);
            }
            return cb(roleChoices);

        })
    }

    getAllEmployeeData(cb) {
        let query = `SELECT employee.id,employee.first_name,employee.last_name,role.title,role.salary,department.name, `
        query += `(SELECT CONCAT(employee.first_name, " ", employee.last_name) FROM employee emp WHERE employee.manager_id = emp.id) as Manager `
        query += `FROM employee `
        query += `JOIN role on employee.role_id = role.id `
        query += `JOIN department on role.department_id = department.id; `
        db.query(query, (err, res) => {
            if (err) throw err;
            return cb(res)
        })
    }

    getAllRoles(cb) {
        const query = "SELECT role.id,role.title,role.salary,department.name AS Department FROM role JOIN department ON role.department_id = department.id";
        db.query(query, (err, res) => {
            if (err) throw err;
            return cb(res);
        })
    }

    getAllDepartments(cb) {
        const query = "SELECT id,name FROM department";
        db.query(query, (err, res) => {
            if (err) throw err;
            return cb(res);
        })
    }

    createEmployee(employeeObj, cb) {
        const { first_name, last_name, role, manager } = employeeObj;
        let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) ";
        query += "VALUES (?,?,?,?);";
        db.query(query, [first_name, last_name, role, manager], (err, res) => {
            if (err) throw err;
            return cb(res);
        })

    }

    createRole(roleObj, cb) {
        const { roleTitle, roleSalary, roleDepartment } = roleObj;
        let query = "INSERT INTO role (title,salary,department_id) ";
        query += "VALUES (?,?,?)";
        db.query(query, [roleTitle, roleSalary, roleDepartment], (err, res) => {
            if (err) throw err;
            return cb(res);
        })
    }

    createDepartment(departmentName, cb) {
        let query = "INSERT INTO department (name) ";
        query += "VALUES (?)";
        db.query(query, [departmentName], (err, res) => {
            if (err) throw err;
            return cb(res);
        })
    }

    updateEmployeeRole(employeeId, roleId, cb) {
        let query = "UPDATE employee ";
        query += "SET role_id=? ";
        query += "WHERE id=?;";
        db.query(query, [roleId, employeeId], (err, res) => {
            if (err) throw err;
            return cb(res);
        })

    }

    close() {
        db.end();

    }
}

module.exports = new employeeDB;