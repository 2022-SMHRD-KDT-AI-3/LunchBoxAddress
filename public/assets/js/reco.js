function cate1() {
    let btn = $("#cate1").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate2() {
    let btn = $("#cate2").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate3() {
    let btn = $("#cate3").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate4() {
    let btn = $("#cate4").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate5() {
    let btn = $("#cate5").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate6() {
    let btn = $("#cate6").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate7() {
    let btn = $("#cate7").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate8() {
    let btn = $("#cate8").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}

function cate9() {
    let btn = $("#cate9").attr("value");
    $.ajax({
        url: "http://127.0.0.1:5000/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        dataType: "json",
        data: { "data": btn }, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success: (result) => { // 데이터를 성공적으로 가져올 경우에
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $(".portfolio-info h4")[i].innerHTML = (`
                <a href="http://127.0.0.1:3307/resPage?id=${result[i].rest_id}">
                    ${result[i].rest_name}<br>
                    ${result[i].menu_name}<br>
                    ${result[i].rest_distance}m 떨어져있어요!<br>
                    네이버 별점은 ${result[i].rest_naver}점이에요!
                </a>
                `); // a 태그 요소 안의 텍스트를 변경함
            }
        },
        error: function () {
        }
    });
}