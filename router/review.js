const express = require('express')
const router = express.Router();
var path = require('path');
var multer = require('multer');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
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
const { log } = require('console');
const { allowedNodeEnvironmentFlags } = require('process');
const { request } = require('http');

router.get("/review_write", function (request, response) {
    response.render("review_write.ejs", {
        user: request.session.user,
        re_id: How //여기서 받아와야하려나? 근데 작성창일뿐이라 아닐거같고
    })
});
router.post("/review_write", upload.single('userfile'), function(request, response){
    console.log(request.file);

    let re_id = request// 리뷰 id 이건 어떻게 받아와야하나요 re_id += 1 줄려면 작성된 re_id를 받아올 곳은??
    if(re_id == null){
        re_id = 1;
    }else{
        re_id += 1;
    } //이렇게 조잡하게 굴리면 터질거같은 부분
    let email = user.email;
    let menu_id = request.body.menu_id;
    let eval = request.body.eval;
    let t_score = request.body.t_score;
    let m_score = request.body.m_score;
    let c_score = request.body.c_score;
    let cook_time = request.body.cook_time;
    let wait_time = request.body.wait_time;
    let contents = request.body.contents;
    let pic_url = 'localhost:3307/LunchBoxAddress/'+request.file.filename;
    let r_kw_1 = request.body.r_kw_1;
    let r_kw_2 = request.body.r_kw_2;
    let r_kw_3 = request.body.r_kw_3;
    let sql = 'insert into review_info values(?,?,?,?,?,?,?,?,?,?,now(),?,?,?,?)';

    conn.query(sql,[re_id, email, menu_id, eval,
        t_score, m_score, c_score, cook_time, wait_time,
        contents, pic_url, r_kw_1, r_kw_2, r_kw_3],function(err, rows){
        if(rows){
            console.log(rows);
        }else{
            console.log(err);
        }
    })
    alert('리뷰 작성 완료, 이전 페이지로 돌아갑니다');
    response.redirect('/');
});
module.exports=router;