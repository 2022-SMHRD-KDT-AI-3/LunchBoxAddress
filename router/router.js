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
let rest_id;
router.get("/resPage", function (request, response) { // main에서 값을 받는 거라 reco가 main.ejs로 가야할 거임
    console.log("12313",request.query.id);
    rest_id = request.query.id;

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

            response.redirect("http://127.0.0.1:3307/test");

        } else {
            console.log("식당못찾음 ㅅㄱ");
        }
    });

    // 디비에서 아이디 매칭해서 정보를 배열변수 담아서 뿌리면
});



router.get("/test", function (request, response) {
    let m_str = "";
    let m_list = [];
    rest_id = request.session.rest.id;
    console.log("라라라",rest_id);
    console.log(rest_id);
    let sql = "";

    sql = "select menu_name from menu_info where rest_id = ?";
    conn.query(sql, [rest_id], function (err, rows) {
        console.log("===================================== 4차방지선 =====================");

        console.log("메뉴 가져오기 성공!");
        console.log(rows.length); // 여기까지 문제 없음
        
        if (rows.length > 0) {
            // console.log("===================================== 2차방지선 =====================");
            console.log("들어감??"); // 여기까지도 들어왔음
            for (let i = 0; i < rows.length; i++){
                console.log(rows[i].menu_name);
                m_list.push(rows[i].menu_name);
                
                
            }
            for (let i = 0; i < m_list.length; i++){

                m_str = m_str + m_list[i] + " "
                
                
            }

            console.log(m_str);
        } else {
            console.log("메뉴못찾음 ㅅㄱ");
        }
        console.log(m_list.length);
        console.log(m_list);

    });
    response.render("test", {
        info: request.session.rest
        // menu:
        
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