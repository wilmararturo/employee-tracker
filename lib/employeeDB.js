const db = require("./db");

class employeeDB {
    getEmployees() {
        const query = "SELECT * FROM employee";

        const result = db.query(query, (err, res) => {
            return res;
        });

        return result;


        this.close();
    }

    getRoles() {
        const query = "SELECT * FROM role";

        db.query(query, (err, res) => {
            return res;
        });


        this.close();
    }

    getDepartments() {
        const query = "SELECT * FROM department";

        db.query(query, (err, res) => {
            return res;
        });


        this.close();
    }
    close() {
        db.end();

    }
}

module.exports = new employeeDB;