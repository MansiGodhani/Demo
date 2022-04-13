const mysql = require('mysql2');
//MySQL details
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeedb',
    multipleStatements: true
});

module.exports = connection;