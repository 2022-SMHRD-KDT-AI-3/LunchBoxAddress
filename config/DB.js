// mysql프로그램을 가져오는게아니라, mysql프로그램과 연결할 수있는 mysql모듈을 가져오는것
const mysql = require("mysql");

// mysql연결
let conn = mysql.createConnection({
     host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_2',
    password: 'smhrd2',
    port: '3307',
    database: 'campus_g_0325_2'
});
conn.connect();

module.exports = conn;