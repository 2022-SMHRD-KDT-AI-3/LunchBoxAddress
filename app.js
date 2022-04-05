const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
// session기능을 저장하기 위한 모듈. mysql에 임시로 저장
const session_mysql_save = require("express-mysql-session");

//1-1 mysql의 session에 대한 정보
let DB_info = {
     host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_2',
    password: 'smhrd2',
    port: '3307',
    database: 'campus_g_0325_2'

}
//1-2 저장하기위한 모듈을 사용하는데 그안에 있는 정보는 DB_info에서 가져옴
let s_m_s = new session_mysql_save(DB_info);


// 현재 프로젝트에 정적파일 폴더 지정
// Template 가져올 때 변환순서
// 1. index.html -> 확장자 .ejs로 변경
// 2. express 프로젝트에 views 폴더로 이동
// 3. 해당 css/ javascript/imges 파일들을 public 폴더로 이동
// 4. app.js에서 app.use(express.static("./public")); 정적파일 폴더 지정
// 5. router에서 response.render로 ejs파일 생성
app.use(express.static("./public"));
// express 내부적으로 engine이 설정되어 있기 때문에 set기능 사용
app.set("view engine", "ejs");
//2 session 미들웨어 등록 (입력할 값이 1개 이상이면 무조건 ({소괄호 안에 중괄호})해주기 )
app.use(session({
    secret: "smart",
    resave: false, // 새롭게 저장할건지
    saveUninitialized: true, // 저장할지말지
    store: s_m_s // 어디에 저장할지

}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);