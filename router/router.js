const { Router } = require("express");
const express = require("express");
const expressMysqlSession = require("express-mysql-session");
//const req = require("express/lib/request");
const router = express.Router();
const conn = require("../config/DB.js");



router.get("/main", function (request, response) {
    
    // console.log(`세션에 저장된 email 값 ${request.session.user.email}`);
    // console.log(`세션에 저장된 tel 값 ${request.session.user.tel}`);
    // console.log(`세션에 저장된 address 값 ${request.session.user.address}`);
 response.render("main", {
        user: request.session.user
        
    }) 
});
router.post("/Join", function (request, response) {
    let email = request.body.email;
    let pw = request.body.pw;
    let gender = request.body.gender;
    let nick = request.body.nick;
    // now() : 현재 날짜
    let sql = "insert into user_info values(?,?,?,?, now())";
    // mysql실행
    // 1. sql실행 2.[id, pw, nick]에 입력한 내용이 db(nodejs_member)로 감 3. 결과를 err나rows에 넣어서 출력
    conn.query(sql, [email, pw, gender, nick], function (err, rows) {
        if (rows) {
            console.log("회원가입성공");
            // 성공시 main.html로 이동
            response.redirect("http://127.0.0.1:3307/login");
        } else {
            console.log(err);
        }
    })
});

router.post("/login", function (request,response) {
    let email = request.body.email;
    let pw = request.body.pw;
    let ck_id = request.body.ck_id;


    conn.query(sql, [email, pw], function (err, rows) {
        let sql = "select * from user_info where email = ? and pw = ?";
        console.log("로그인 성공");
        console.log(rows.length);
        if (rows.length > 0) {
            request.session.user = {
                "email": rows[0].email,
                "gender": rows[0].gender,
                "nick": rows[0].nick
            }
            

        } else {
            console.log("로그인실패임둥");
            // res.write("<script> alert('이메일 또는 비밀번호를 확인해주세요.')</script>");
            // res.write("<script>window.location=\'/wdw-snippet.html'</script>");
           
            // response.redirect("http://127.0.0.1:3307/0330Message/public/loginF.html");
        }
    });
    // conn.query(sql, [ck_id], function (err, rows) {
    //     console.log("비회원 로그인 성공");
    //     console.log("아이디 저장? : " + request.session.ck_id);

    //     if (ck_id === "non_member") {
    //         console.log("아이디 저장 체크!");

    //         // cookie생성
    //         // res.cookie('cookie 이름', 'cookie 내용');
    //         response.cookie('non_loginId', request.body.ck_id);
    //         var non_user = "";
    //         if (request.cookies['non_loginId'] !== undefined) {
    //             non_user = request.cookies['non_loginId'];

    //         }
            
    //         // cookie 읽기
    //         console.log(request.cookies);
        
    //     response.redirect("http://127.0.0.1:3307/main");
    //     } else {
    //     console.log("로그인실vㅜㅜ");
    //     }
    // })
})

router.get("/logout", function (request, response) {
    delete request.session.user;
    
    response.redirect("http://127.0.0.1:3307/main");
})

//리뷰 작성 메소드0407 조정중
router.get("/review_write", function (request, response) {

    response.render("review_write.ejs", {

        user: request.session.user

    })
});

//식당명 검색 라우터
router.get("/search",function(request, response){

    let sql = "select * from rest_info where rest_name=?";

    conn.query(sql, [rest_name], function (err, rows) {
        //         console.log(rows.length);
        //         if (rows.length > 0) {
        //             request.session.user = {
        //                 "email": rows[0].email,
        //                 "tel": rows[0].tel,
        //                 "address": rows[0].address
        //             }
        //             response.redirect("http://127.0.0.1:3000/main");
        
        //         } else {
        //              response.redirect("http://127.0.0.1:5500/0330Message/public/loginF.html");
        //         }
             });
});





// -------------------------수업 예제 경계선-----------------------------
// router.get("/update", function (request, response) {
//     // ejs만들어주는 라우터
//     response.render("update", {
//         user: request.session.user
//     })
// });

// router.post("/update_exe", function (request, response) {
//     // 실제 db에 반영시켜주는 라우터
//     let email = request.session.user.email;
//     let pw = request.body.pw;
//     let tel = request.body.tel;
//     let address = request.body.address;
//     let sql = "update user_info set pw = ?,tel = ?,address = ? where email = ?";


//     conn.query(sql, [pw, tel, address, email], function (err, rows) {
//         if (rows) {
//             // 기존의 user정보를 새로운 user를 만들어서 덮어주기
//             // 로그인 할때의 user값이 아닌 update된 user값을 가져옴
//             request.session.user = {
//                 "email": email,
//                 "tel": tel,
//                 "address": address
//             }
//             response.redirect("http://127.0.0.1:3307/main");
//         } else {
//             console.log(err);
//         }
//     })
// })


// router.post("/delete", function (request, response) {
//     let id = request.body.id;
//     let sql = "delete from nodejs_member where id = ?";
//     conn.query(sql, [id], function (err, rows) {
//         if (rows) {
//             response.redirect("http://127.0.0.1:3000/main");
//         } else {
//             console.log(err);
//         }
//     })
// });

// router.get("/btnDelete", function (request, response) {
//     console.log("btnDelete호출");
//     //selectAll에서 queryString해서 받아온 id값을 저장
//     let id = request.query.id;
//     console.log(`삭제할 id값 : ${id}`);
//     let sql = "delete from nodejs_member where id = ?";
//     conn.query(sql, [id], function (err, rows) {
//         if (rows) {
//             response.redirect("http://127.0.0.1:3000/selectAll");
//         } else {
//             console.log(err);
//         }
//     })
// });



module.exports = router;