const db = require("./db");

class employeeDB {
    getTableData(table, callback) {
        const query = `SELECT * FROM ${table}`;

        db.query(query, (err, res) => {
            if (err) { reject(err) }
            console.table(res);
            callback();
        });



    }


    close() {
        db.end();

    }
}

module.exports = new employeeDB;