const express = require('express')
const router = express.Router();
var path = require('path');
var multer = require('multer');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const conn = require("../config/DB.js");

//리뷰사진 업로드 경로 설정
var storage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, 'public/assets/img/review_img')
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

// router.get("/review_write", function (request, response) {
//     response.render("review_write.ejs", {
//         user: request.session.user,
//         re_id: How //여기서 받아와야하려나? 근데 작성창일뿐이라 아닐거같고
//     })
// });
router.post("/test", upload.single('userfile'), function(request, response){
    console.log(request.file);

    
    let re_id;
    let email = user.email;
    let eval = request.body.eval;
    let t_score = request.body.t_score;
    let m_score = request.body.m_score;
    let c_score = request.body.c_score;
    let cook_time = request.body.cook_time;
    let wait_time = request.body.wait_time;
    let contents = request.body.contents;
    let pic_url = 'localhost:3307/LunchBoxAddress/'+request.file.filename;
    let rest_id = info.rest_id;
 
    let sql = 'insert into review_info values(?,?,?,?,?,?,?,?,?,now(),?,?,)';

    conn.query(sql,[email, menu_id, eval,
        t_score, m_score, c_score, cook_time, wait_time,
        contents, pic_url, rest_id],function(err, rows){
        if(rows){
            console.log(rows);
        }else{
            console.log(err);
        }
    })
    //alert('리뷰 작성 완료, 이전 페이지로 돌아갑니다');
    response.redirect("localhost:3307/test");
});
module.exports=router;