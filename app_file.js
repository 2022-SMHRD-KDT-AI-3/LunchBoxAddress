var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');

var storage = multer.diskStorage({
    destination: function(req, file, cb) { //cb -> call back함수 줄임말
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) { //파일이름이 중복되지않게 변수설정
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname,ext) + '-' + Date.now() + ext);
    }
})
var upload = multer({ storage: storage }) //destination의 줄임 파일경로 최종지
const { log } = require('console');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.use('/UploadPractice', express.static('uploads'));
app.set('views', './views_file'); //템플릿 파일의 경로 세팅
app.set('view engine', 'jade'); //뷰엔진 jadf를 사용하겠다는 명시
app.get('/upload', function(req, res){
    res.render('upload');
});
app.post('/upload', upload.array('userfile', 5), function(req, res, next){
    //avatar는 사용자가 전송한 데이터에서 파일이 포함되어있다면 그 파일을 가공해서
    //request 객체의 파일이라는 property를 주기로 약속되어진 함수(미들웨어)
    console.log(req.files, req.body.path);
    res.send('Uploaded'); //계속해서 새로고침하면 중복저장될 위험이 있음
});

app.get('/topic/new', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics:files});
    });
});
app.get(['/topic', '/topic/:id'], function(req, res){
    fs.readdir('data', function(err, files){

    })
})

app.listen(3000);