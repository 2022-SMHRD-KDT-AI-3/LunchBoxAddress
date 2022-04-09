const { Router } = require("express");
const express = require("express");
const expressMysqlSession = require("express-mysql-session");
const req = require("express/lib/request");
const res = require("express/lib/response");
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
    response.render("review_write.ejs", {
        user: request.session.user
    })
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

router.get("/resPae", function (request, response) { // main에서 값을 받는 거라 reco가 main.ejs로 가야할 거임
    console.log(request.query.id);
    let rest_id = request.query.id;

    let sql = "select * from rest_info where rest_id = ?";
    conn.query(sql, [rest_id], function (err, rows) {
        console.log("식당 찾기 성공!");
        // console.log(rows.length);

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
            console.log(request.session.rest.id);
            console.log(request.session.rest.name);
            console.log(request.session.rest.address);
            console.log(request.session.rest.type);
            console.log(request.session.rest.latitude);

            response.redirect("http://127.0.0.1:3307/resPage");

        } else {
            console.log("식당못찾음 ㅅㄱ");
        }
    });

    // 디비에서 아이디 매칭해서 정보를 배열변수 담아서 뿌리면
});



router.get("/resPage", function (request, response) {
    
    response.render("resPage", {
        info : request.session.rest
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