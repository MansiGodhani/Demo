const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const connection = require('./config');
// const { db: { host, user, password, database, multipleStatements }, app: { port } } = config;
// connit
// const connection = mysql.createConnection({
//     host: host,
//     user: user,
//     password: password,
//     database: database,
//     multipleStatements: multipleStatements
// });

// define a root route
// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

connection.connect((err) => {
    if (!err)
        console.log('Database connected successfully');
    else
        console.log('Database connection failed' + JSON.stringify(err, undefined, 2));
});

//Route
const empRoutes = require('./routes/empRoutes');
app.use('/api/employees', empRoutes)


app.listen(3000, () => console.log('Express server started at port no : 3000' ));