const db = require("./db");

class employeeDB {
    getTableData(table, callback) {
        const query = `SELECT * FROM ${table}`;

        db.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            callback();
        });



    }

    listDepartments() {
        let departmentList = [];
        const query = "SELECT name FROM department";
        db.query(query, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                departmentList.push(res[i].name);
            }

        });
        return departmentList;
    }

    listRoles() {
        let roleList = [];
        const query = "SELECT title FROM role";
        db.query(query, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                roleList.push(res[i].title);
            }

        });
        return roleList;
    }

    listRolesByDepartment(department) {
        let roleList = [];

        const query = "SELECT title FROM role WHERE department_id=(SELECT id FROM department WHERE name = ?)"
        db.query(query, department, (err, res) => {
            if (err) throw err;

            for (let i = 0; i < res.length; i++) {
                roleList.push(res[i].title);
            }
        });


        return roleList;

    }


    close() {
        db.end();

    }
}

module.exports = new employeeDB;