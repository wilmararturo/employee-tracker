const db = require("./db");

class employeeDB {
    getEmployees() {
        const query = "SELECT * FROM employee";
        db.query(query, (err, res) => {
            console.table(res)
        });
        this.close();
    }
    close() {
        db.end();

    }
}

module.exports = new employeeDB;