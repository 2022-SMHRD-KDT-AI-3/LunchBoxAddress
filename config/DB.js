// mysql프로그램을 가져오는게아니라, mysql프로그램과 연결할 수있는 mysql모듈을 가져오는것
const mysql = require("mysql");

// mysql연결
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'nodejs'
});
conn.connect();

module.exports = conn;