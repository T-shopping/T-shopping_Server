require('dotenv').config();
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

//게시판 페이징 API
router.get('/passing/:cur', function(req, res){
    //페이지당 게시물 수 : 한 페이지 당 10개 게시물
    var page_size = 10;
    //페이지의 갯수 : 1 ~ 10개 페이지
    var page_list_size = 10;
    //limit 변수
    var no = "";
    //전체 게시물의 숫자
    var totalPageCount = 0;

    var queryString = 'select count(*) as cnt from 테이블이름';
    getConnection().query(queryString, function(error2, data){
        if(error2){
            console.log(error2 + "메인 화면 mysql 조회 실패");
        }
        //전체 게시물의 숫자
        totalPageCount = data[0].cnt;

        //현재 페이지
        var curPage = req.params.cur;

        console.log("현재 페이지 : " + curPage, "전체 페이지 : " + totalPageCount);

        //전체 페이지 갯수
        if(totalPageCount < 0){
            totalPageCount = 0;
        }

        var totalPage = Math.ceil(totalPageCount / page_size);// 전체 페이지수
        var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
        var curSet = Math.ceil(curPage / page_list_size) // 현재 셋트 번호
        var startPage = ((curSet - 1) * 10) + 1 //현재 세트내 출력될 시작 페이지
        var endPage = (startPage + page_list_size) - 1; //현재 세트내 출력될 마지막 페이지

        if(curPage < 0){
            no = 0;
        } else {
            no = (curPage - 1) * 10;
        }

        console.log('[0] curPage : ' + curPage + ' | [1] page_list_size : ' + page_list_size + ' | [2] page_size : ' + page_size + ' | [3] totalPage : ' + totalPage + ' | [4] totalSet : ' + totalSet + ' | [5] curSet : ' + curSet + ' | [6] startPage : ' + startPage + ' | [7] endPage : ' + endPage);

        var result2 = {   //페이지 정보 추출
            "curPage": curPage,
            "page_list_size": page_list_size,
            "page_size": page_size,
            "totalPage": totalPage,
            "totalSet": totalSet,
            "curSet": curSet,
            "startPage": startPage,
            "endPage": endPage
            };

            var queryString = 'select * from 테이블이름 order by id desc limit ?, ?';
            getConnection().query(queryString, [no, page_size], function(error, result){
                if(error){
                    console.log("페이징 에러 : " + error);
                    return;
                }

                res.json({
                    'code': 200,
                    'msg': 'Paging success',
                    'data': result,
                    'pasing': result2
                });
            });
    });
});

//메인화면
router.get('/main', function(req, res){
    console.log("메인 화면");
    res.redirect('/pasing/' + 1);
});

//삭제
router.get('/delete/:id', function(req, res){
    console.log("삭제 진행");

    getConnection().query('delete from 테이블이름 where id = ?', [req.params.id], function(){
        res.json({
            'code': 200,
            'msg': 'Delete success'
        });
    });
});

//삽입
router.post('/insert', function(req, res){
    console.log("삽입 진행");
    var body = req.body;
    getConnection().query('insert into products(name) values(?,?,?)', [], function(){
        res.json({
            'code': 200,
            'msg': 'Insert success'
        });
    });
});

//수정 페이지
router.get('/edit/:id', function(req, res){
    console.log("수정 페이지");

    getConnection().query('select * frm pouduects where id = ?', [req.params.id], function(error, result){
        res.json({
            'code': 200,
            'msg': 'Successful loading of data before modification',
            'data': result[0]
        });
    });
});

//수정 
router.post('/edit/:id', function(req, res){
    console.log("수정 진행");
    var body = req.body;
    getConnection().query('update products set ', [], function(){
        res.json({
            'code': 200,
            'msg': 'Modification success'
        });
    });
});

//글 상세 보기
router.get('/detail/:id', function(req, res){
    console.log("글 상세 보기 진행");

    getConnection().query('select * from prducts where id = ?', [req.params.id], function(error, result){
        res.json({
            'code': 200,
            'msg': 'View article details Success',
            'data': result[0]
        });
    });
});



var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password
});
    
    
//DB 연결 함수
function getConnection() {
    return pool
}


module.exports = router;