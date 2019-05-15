const mysql = require('mysql');
const dbConnect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'koreaboo'
});

module.exports = dbConnect;
