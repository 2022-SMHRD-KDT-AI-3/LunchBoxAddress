const express = require("express");
const cookieParser = require('cookie-parser');

const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");
const session_mysql_save = require("express-mysql-session");
const app = express();

let DB_info = {
    host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_2',
    password: 'smhrd2',
    port: '3307',
    database: 'campus_g_0325_2'
}

let s_m_s = new session_mysql_save(DB_info);

app.set(path.join(__dirname, '/views'));
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use(session({
    secret: "smart",
    resave: false, // 새롭게 저장할건지
    saveUninitialized: true, // 저장할지말지
    store: s_m_s // 어디에 저장할지
}));

app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3307);