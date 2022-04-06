function test1(){
    let btn = document.querySelector("#test1").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco", // 데이터를 요청할 서버의 경로(플라스크 서버)
        data : {"data" : btn}, // 플라스크 서버에 데이터를 요청할 때 "data" 라는 이름으로 btn 변수의 값을 보냄
        success : (result) => { // 데이터를 성공적으로 가져올 경우에
            // location.href = "#recoTitle"; // 식당 목록 섹션으로 이동하고(확인차 주석 처리함)
            const entries = Object.entries(result); // 가져온 데이터를 배열 형태로 변환함(CORS 정책 때문에)
            console.log(result); // 콘솔창에 가져온 데이터를 보여줌
            $("#recoList").empty(); // 식당 목록 섹션에 이전에 불러온 식당 목록이 있을 경우에 그 내용을 지우고
            for (let i = 0; i < entries.length; i++) { // 식당 목록을 출력함
                $("#recoList").append(` 
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `); // 네모 안에 들어가야할 내용들임(#recoList를 바꿔야 함)
            }
        },
        error:function(){
        }
    });
}

function test2(){
    let btn = document.querySelector("#test2").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test3(){
    let btn = document.querySelector("#test3").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test4(){
    let btn = document.querySelector("#test4").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test5(){
    let btn = document.querySelector("#test5").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test6(){
    let btn = document.querySelector("#test6").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test7(){
    let btn = document.querySelector("#test7").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}

function test8(){
    let btn = document.querySelector("#test8").value;
    $.ajax({
        url : "http://127.0.0.1:3307/reco",
        data : {"data" : btn},
        success : (result) => {
            const entries = Object.entries(result);
            console.log(result);
            $("#recoList").empty();
            for (let i = 0; i < entries.length; i++) {
                $("#recoList").append(`
                <div>
                    <h2>${i + 1}번째 식당</h2>
                    <span>식당 이름 : ${result[i].rest_name}</span><br>
                    <span>메뉴 이름 : ${result[i].menu_name}</span><br>
                    <span>식당 주소 : ${result[i].rest_address}</span><br>
                    <span>식당 거리 : ${result[i].rest_distance}m</span><br>
                    <span>식당 휴무일 : ${result[i].rest_offtime}</span><br>
                    <span>식당 영업시간 : ${result[i].rest_ontime}</span><br>
                    <span>식당 연락처 : ${result[i].rest_tel}</span><br>
                    <span>네이버 별점 : ${result[i].rest_naver}</span>
                </div>
                <br>
                `);
            }
        },
        error:function(){
        }
    });
}