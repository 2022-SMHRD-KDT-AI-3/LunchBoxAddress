const { Router } = require("express");
const express = require("express");
const expressMysqlSession = require("express-mysql-session");
const req = require("express/lib/request");
const res = require("express/lib/response");
var path = require('path');
var multer = require('multer');
var bodyParser = require('body-parser');
const router = express.Router();
const conn = require("../config/DB.js");




router.get(["/main","/resPage/:id"], function (request, response) {
    
    let sql = "select rest_id, rest_name from rest_info";
    conn.query(sql, (err, rows) => {
        if (err) {
            console.error("query error" + err);
        } else {
            response.render("main", {
                user: request.session.user,
                rows: rows
        
            });
        }
    });
});

router.post("/Join", function (request, response) {
    let email = request.body.email;
    let pw = request.body.pw;
    let gender = request.body.gender;
    let nick = request.body.nick;

    let sql = "insert into user_info values(?,?,?,?, now())";
    conn.query(sql, [email, pw, gender, nick], function (err, rows) {

        if (rows) {
            console.log("회원가입성공");
            // response.redirect("http://127.0.0.1:3307/login");
            response.redirect("http://127.0.0.1:3307/main");

        } else {
            console.log(err);
        }
    })
});

router.post("/login", function (request,response) {
    let email = request.body.email;
    let pw = request.body.pw;

    let sql = "select * from user_info where email = ? and pw = ?";
    conn.query(sql, [email, pw], function (err, rows) {
        console.log("로그인 성공");
        console.log(rows.length);
        if (rows.length > 0) {
            request.session.user = {
                "email": rows[0].email,
                "gender": rows[0].gender,
                "nick": rows[0].nick
            }
            response.redirect("http://127.0.0.1:3307/main");
            
        } else {
            console.log("로그인실패임둥");
        }
    });
});

router.get("/logout", function (request, response) {
    delete request.session.user;
    response.redirect("http://127.0.0.1:3307/main");
});

router.get("/review_write", function (request, response) { // 리뷰 작성 라우터(수정 중, 지연)
    response.render("http://127.0.0.1:3307/test", {
        user: request.session.user
    })
});

//리뷰사진 업로드 경로 설정
var storage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, './public/assets/img/review_img')
    },
    filename: function(request, file, cb) { 
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname,ext) + '-' + Date.now() + ext);
    }
})
var upload = multer({ storage: storage })
const { log, info } = require('console');
const { allowedNodeEnvironmentFlags } = require('process');
const { request } = require('http');
const { userInfo } = require('os');

router.post("/test", upload.single('userfile'), function(request, response){
    console.log(request.file);


    let nick = request.session.user.nick;
    let eval = parseInt(request.body.eval);
    let t_score = request.body.t_score;
    let m_score = request.body.m_score;
    let c_score = request.body.c_score;
    let cook_time = request.body.cook_time;
    let wait_time = request.body.wait_time;
    let contents = request.body.contents;
    let pic_url = 'localhost:3307/LunchBoxAddress/'+request.file.filename;
    let rest_id = parseInt(request.session.rest.id);
 
    let sql = 'insert into review_info( nick, eval, t_score, m_score, c_score, cook_time, wait_time, contents, re_date, pic_url, rest_id) values(?,?,?,?,?,?,?,?,now(),?,?)';

    conn.query(sql, [nick, eval, t_score, m_score, c_score, cook_time, wait_time,
        contents, pic_url, rest_id], function(err, rows){
        if(rows){
            console.log(rows);
            
        }else{
            console.log(err);
        }
    });
    //alert('리뷰 작성 완료, 이전 페이지로 돌아갑니다');
    response.redirect("http://127.0.0.1:3307/test/");

});

router.get("/search",function(request, response){
    let sql = "select * from rest_info where rest_name=?"; //식당명 검색 라우터(아이디어가 필요함)
    conn.query(sql, [], function (err, rows) {
        
    });
});

router.get("/reco", function(request, response) { // main에서 값을 받는 거라 reco가 main.ejs로 가야할 거임
    response.render("reco", {

    });
});


// 식당페이지 ====


// router.get(["/resPage","/resPage/:id"], function (request, response) {
//     let sql = "select * from rest_info";
//     // let baseName = path.basename(fileName);
//     conn.query(sql, (err, rows) => {
//         if (err) {
//             console.error("query error" + err);
//             response.status(500).send("Internal Server Error😢");

//         } else {
            
//             // console.log( "파일이름: %s", baseName);
//             response.render("resPage", {
//                 user: request.session.user,
//                 rows: rows
        
//             });
//         };
//     });
    
// });
// let rest_id;
router.get("/resPage", function (request, response) { // main에서 값을 받는 거라 reco가 main.ejs로 가야할 거임

    let rest_id = request.query.id;
    let sql_1 = "select * from rest_info where rest_id = ?";
    conn.query(sql_1, [rest_id], function (err, rows) {
        console.log("식당 찾기 성공!");

        if (rows.length > 0) {
            request.session.rest = {
                "id": rows[0].rest_id,
                "name": rows[0].rest_name,
                "address": rows[0].rest_address,
                "type": rows[0].rest_type,
                "latitude": rows[0].rest_latitude,
                "longitude": rows[0].rest_logitude,
                "distance": rows[0].rest_distance,
                "tel": rows[0].rest_tel,
                "ontime": rows[0].rest_ontime,
                "offtime": rows[0].rest_offtime,
                "naver": rows[0].rest_naver
            }
            response.redirect("http://127.0.0.1:3307/test");
        } else {
            console.log("식당못찾음 ㅅㄱ");
        }
    });

   
});


router.get("/test", function (request, response) {
    
    rest_id = request.session.rest.id;

    let sql_2 = "select menu_name from menu_info where rest_id = ?;" + "select * from review_info where rest_id = ?;" + "select b_url, ad_nonad from blog_info where rest_id = ?;";
    conn.query(sql_2, [rest_id, rest_id, rest_id], function (err, rows) {
        
        if(err) {
            console.log("ㅅㅂ 개망함");
        }

        if(rows[0].length % 2 != 0) {
            rows[0].push(" ")
        }

        console.log("여기까지오나제발리뷰불러오게해주세요");
        response.render("test", {
            user: request.session.user,
            info: request.session.rest,
            menu : rows[0],
            review : rows[1],
            blog: rows[2]
        });
        
        let res_menu = rows[0];
        let res_review = rows[1];
        let res_blog = rows[2];

        console.log(res_menu);
        console.log(res_review);
        console.log(res_blog.length);
        
    });

}); // 라우터 닫음



router.post("/login", function (request, response) {
    let email = request.body.email;
    let pw = request.body.pw;

    let sql = "select * from user_info where email = ? and pw = ?";
    conn.query(sql, [email, pw], function (err, rows) {
        console.log("로그인 성공");
        console.log(rows.length);
        if (rows.length > 0) {
            request.session.user = {
                "email": rows[0].email,
                "gender": rows[0].gender,
                "nick": rows[0].nick
            }
            response.redirect("http://127.0.0.1:3307/main");

        } else {
            console.log("로그인실패임둥");
        }
    });
});

module.exports = router;