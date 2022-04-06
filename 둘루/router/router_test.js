const { Router } = require("express");
const express = require("express");
const router = express.Router();

// 초반에 무조건 연결된 흐름을 가지고 와야함
const conn = require("../config/DB.js");

router.get("/main", function (request, response) {
    
    // console.log(`세션에 저장된 email 값 ${request.session.user.email}`);
    // console.log(`세션에 저장된 tel 값 ${request.session.user.tel}`);
    // console.log(`세션에 저장된 address 값 ${request.session.user.address}`);

    response.render("main", {
        user: request.session.user
        
    }) // 로그인x :null / 로그인o : 사용자정보
})

router.post("/Join", function (request,response) {
    let email = request.body.email;
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;
    // now() : 현재 날짜
    let sql = "insert into message_member values(?,?,?,?, now())";
    // mysql실행
    // 1. sql실행 2.[id, pw, nick]에 입력한 내용이 db(nodejs_member)로 감 3. 결과를 err나rows에 넣어서 출력
    conn.query(sql, [email, pw, tel,address], function (err, rows) {
        if (rows) {
            // 성공시 main.html로 이동
            response.redirect("http://127.0.0.1:3000/main");
        } else {
            console.log(err);
        }
    })
})

router.post("/Login", function (request,response) {
    let email = request.body.email;
    let pw = request.body.pw;

    let sql = "select * from message_member where email = ? and pw = ?";

    conn.query(sql, [email,pw], function (err, rows) {
        console.log(rows.length);
        if (rows.length > 0) {
            request.session.user = {
                "email": rows[0].email,
                "tel": rows[0].tel,
                "address": rows[0].address
            }
            response.redirect("http://127.0.0.1:3000/main");

        } else {
             response.redirect("http://127.0.0.1:5500/0330Message/public/loginF.html");
        }
    });
})

router.get("/logout", function (request, response) {
    delete request.session.user;
    
    response.redirect("http://127.0.0.1:3000/main");
})

router.get("/update", function (request, response) {
    // ejs만들어주는 라우터
    response.render("update", {
        user: request.session.user
    })
});

router.post("/update_exe", function (request, response) {
    // 실제 db에 반영시켜주는 라우터
    let email = request.session.user.email;
    let pw = request.body.pw;
    let tel = request.body.tel;
    let address = request.body.address;
    let sql = "update message_member set pw = ?,tel = ?,address = ? where email = ?";


    conn.query(sql, [pw, tel, address, email], function (err, rows) {
        if (rows) {
            // 기존의 user정보를 새로운 user를 만들어서 덮어주기
            // 로그인 할때의 user값이 아닌 update된 user값을 가져옴
            request.session.user = {
                "email": email,
                "tel": tel,
                "address": address
            }
            response.redirect("http://127.0.0.1:3000/main");
        } else {
            console.log(err);
        }
    })
})

router.get("/selectMember", function (request, response) {
    // 전체 회원의 정보를 보여주는 라우터
    let sql = "select * from message_member";
    conn.query(sql, function (err, rows) {
        if (rows) {
            console.log(rows);
            response.render("selectMember", {
                rows: rows
            })
        } else {
            console.log(err);
        }

    })

});




// router.post("/login", function (request, response) {
//     // 사용자가 입력한 id가 'smart'이고 pw가 '123'일때
//     // 성공시 loginS.html로 이동
//     // 실패시 loginF.html로 이동
//     // if (request.body.id == "smart" && request.body.pw == "123") {
//     //     response.redirect("http://127.0.0.1:5500/0322expressDB/public/loginS.html");
//     // } else {
//     //     response.redirect("http://127.0.0.1:5500/0322expressDB/public/loginF.html");
//     // }
//     let id = request.body.id;
//     let pw = request.body.pw;
    
//     let sql = "select * from nodejs_member where id = ? and pw = ?";

//     conn.query(sql, [id, pw], function (err, rows) {
//         console.log(rows.length);
//         if (rows.length > 0) {
//             request.session.user = {
//                 "id": rows[0].id,
//                 "nick": rows[0].nick
//             }

//             response.render("loginS.ejs", {
//                 id: rows[0].id,
//                 nick: rows[0].nick
//             })
//         } else {
//             response.redirect("http://127.0.0.1:5500/0322expressDB/public/loginF.html");
//         }
//     });
// });

// router.post("/join", function (request, response) {
//     let id = request.body.id;
//     let pw = request.body.pw;
//     let nick = request.body.nick;
//     let sql = "insert into nodejs_member values(?,?,?)";
//     // mysql실행
//     // 1. sql실행 2.[id, pw, nick]에 입력한 내용이 db(nodejs_member)로 감 3. 결과를 err나rows에 넣어서 출력
//     conn.query(sql, [id, pw, nick], function (err, rows) {
//         if (rows) {
//             // 성공시 main.html로 이동
//             response.redirect("http://127.0.0.1:3000/main");
//         } else {
//             console.log(err);
//         }
//     })
// });

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

// router.post("/update", function (request, response) {
//     let id = request.body.id;
//     let select = request.body.select;
//     let data = request.body.data;
//     let sql = "";
//     if (select == "pw") {
//         sql = "update nodejs_member set pw = ? where id = ?";
//     } else {
//         sql = "update nodejs_member set nick = ? where id = ?";
//     }
//     conn.query(sql, [data, id], function (err, rows) {
//     if (rows) {
//         response.redirect("http://127.0.0.1:3000/main");
//     } else {
//         console.log(err);
//     }
// })
// });

// router.get("/selectAll", function (request, response) {
//     // 링크를 통해서 서버 라우터를 호출할 때는 get방식으로 설정
//     let sql = "select * from nodejs_member";
//     conn.query(sql, function (err, rows) {
//         if (rows) {
//             console.log(rows);
//             response.render("select", {
//                 rows : rows
//             })
//             // response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//             // response.write("<html>");
//             // response.write("<body>");
//             // response.write("<h1>회원정보</h1>");
//             // response.write("<table border='1'>");
//             // response.write("<tr>");
//             // response.write("<th>ID</th>");
//             // response.write("<th>PW</th>");
//             // response.write("<th>NICK</th>");
//             // response.write("</th>");
//             // for (let i = 0; i < rows.length; i++){
//             //     response.write("<tr>");
//             //     response.write(`<td>${rows[i].id}</td>`);
//             //     response.write(`<td>${rows[i].pw}</td>`);
//             //     response.write(`<td>${rows[i].nick}</td>`);
//             //     // queryString방식으로 데이터 보내기 : 시작은 ?로
//             //     // 1. for 문이 1바퀴일때 버튼은 id에 들어간 값이 들어가있음. 2바퀴일때 2째 검색결과가 hot이면 새롭게 만들어진 버튼에는 hot가 들어감
//             //     response.write(`<td><a href = 'http://127.0.0.1:3000/btnDelete?id=${rows[i].id}'><button>삭제</button></a></td>`);
//             //     response.write("</tr>");
//             // }
//             // response.write("</table>");
//             // response.write("</body>");
//             // response.write("</html>");
//             // response.end();
//         } else {
//             console.log(err);
//         }
//     })
// });

// router.post("/selectOne", function (request, response) {
//     // 링크를 통해서 서버 라우터를 호출할 때는 get방식으로 설정
//     let id = request.body.id;
//     let sql = "select * from nodejs_member where id = ?";
//     conn.query(sql,[id], function (err, rows) {
//         if (rows) {
//             console.log(rows);
//             response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//             response.write("<html>");
//             response.write("<body>");
//             response.write(`<h1>${rows[0].nick}님의 회원정보</h1>`);
//             response.write("<table border='1'>");
//             response.write("<tr>");
//             response.write("<th>ID</th>");
//             response.write("<th>PW</th>");
//             response.write("<th>NICK</th>");
//             response.write("</th>");
//             response.write("<tr>");
//             response.write(`<td>${rows[0].id}</td>`);
//             response.write(`<td>${rows[0].pw}</td>`);
//             response.write(`<td>${rows[0].nick}</td>`);
//             response.write("</tr>");
//             response.write("</table>");
//             response.write("</body>");
//             response.write("</html>");
//             response.end();
//         } else {
//             console.log(err);
//         }
//     })
// });

// router.get("/main", function (request, response) {
//     response.render("main", {
//         user: request.session.user
//     })
// })

// router.get("/logout", function (request, response) {
//     delete request.session.user;
//     response.render("main", {
//         user: request.session.user
//     })
// })




module.exports = router;