const db = require("./db");

class employeeDB {
    getTableData(table) {
        const query = `SELECT * FROM ${table}`;

        const result = db.query(query, (err, res) => {
            console.table(res);
        });

    }


    close() {
        db.end();

    }
}


module.exports = new employeeDB;