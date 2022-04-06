var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(35.14979621106867, 126.91987705807563), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        content: '<div>왕자관</div>',
        latlng: new kakao.maps.LatLng(35.147241988478164, 126.91826827915573)
    },
    {
        content: '<div>신성식당</div>',
        latlng: new kakao.maps.LatLng(35.14763165828076, 126.91801822958237)
    },
    {
        content: '<div>900달러</div>',
        latlng: new kakao.maps.LatLng(35.15134792800322, 126.92205314180815)
    },
    { 
        content: '<div>미미당</div>',
        latlng: new kakao.maps.LatLng(35.14790641338305, 126.91778201084745)
    },
    { 
        content: '<div>등촌칼국수</div>',
        latlng: new kakao.maps.LatLng(35.147433418319615, 126.91810622069801)
    },
    { 
        content: '<div>낙지한마당</div>',
        latlng: new kakao.maps.LatLng(35.14891028994869, 126.91943811086323)
    },
    { 
        content: '<div>종가집</div>',
        latlng: new kakao.maps.LatLng(35.150347004501675, 126.91801276262757)
    },
    { 
        content: '<div>월계수식당</div>',
        latlng: new kakao.maps.LatLng(35.146761485890906, 126.91748960925052)
    },
    { 
        content: '<div>해뜨는집</div>', 
        latlng: new kakao.maps.LatLng(35.148472892486424, 126.91908188115725)
    },
    { 
        content: '<div>풍남옥</div>',
        latlng: new kakao.maps.LatLng(35.14866477856655, 126.91960296588229)
    },
    { 
        content: '<div>홍능갈비</div>', 
        atlng: new kakao.maps.LatLng(35.147708199631026, 126.9179084120694)
    },
    { 
        content: '<div>민속촌</div>',
        latlng: new kakao.maps.LatLng(35.145879008768546, 126.91875797724285)
    },
    { 
        content: '<div>두레식당</div>', 
        latlng: new kakao.maps.LatLng(35.151713359021336, 126.91588231719035)
    },
    { 
        content: '<div>1515짜장면</div>',
        latlng: new kakao.maps.LatLng(35.15005122824509, 126.92052345096769)
    },
    { 
        content: '<div>오대양횟집</div>',
        latlng: new kakao.maps.LatLng(35.15277977627421, 126.92003516480152)
    },
    { 
        content: '<div>3.6식당</div>',
        latlng: new kakao.maps.LatLng(35.15028033938119, 126.92287175424208)
    },
    { 
        content: '<div>고려조삼계탕</div>',
        latlng: new kakao.maps.LatLng(35.14916379441184, 126.91775605405167)
    },
    { 
        content: '<div>해안식당</div>', 
        latlng: new kakao.maps.LatLng(35.14817075621564, 126.92224821889494)
    },
    { 
        content: '<div>홍도</div>',
        latlng: new kakao.maps.LatLng(35.15354715801218, 126.91849244626832)
    },
    { 
        content: '<div>본전소머리국밥</div>',
        latlng: new kakao.maps.LatLng(35.15422485410657, 126.91763846802235)
    },
    { 
        content: '<div>맛집한겨레</div>',
        latlng: new kakao.maps.LatLng(35.149985866953664, 126.91714066158418)
    },
    { 
        content: '<div>열도지</div>',
        tlng: new kakao.maps.LatLng(35.1470671443242, 126.92311895723648)
    },
    { 
        content: '<div>동부식당</div>', 
        latlng: new kakao.maps.LatLng(35.14615841027873, 126.9221595984424)
    },
    { 
        content: '<div>청진동해장국</div>',
        latlng: new kakao.maps.LatLng(35.15199701437033, 126.91548968149742)
    },
    { 
        content: '<div>잘먹었습니다</div>',
        latlng: new kakao.maps.LatLng(35.15174485707394, 126.915810949764)
    },
    { 
        content: '<div>굴마을</div>',
        latlng: new kakao.maps.LatLng(35.14609085577358, 126.92223373630947)
    },
    { 
        content: '<div>구수향</div>',
        latlng: new kakao.maps.LatLng(35.14996913966786, 126.91906393840118)
    },
    { 
        content: '<div>춘자생태탕</div>',
        latlng: new kakao.maps.LatLng(35.14720643920071, 126.9224658727472)
    },
    { 
        content: '<div>참뫼</div>',
        lalng: new kakao.maps.LatLng(35.1496600006425, 126.91843322011009)
    },
    { 
        content: '<div>고봉민김밥</div>',
        latlng: new kakao.maps.LatLng(35.14911283272157, 126.91904283774797)
    },
    { 
        content: '<div>신불떡볶이</div>',
        latlng: new kakao.maps.LatLng(35.14846534108362, 126.92485156225209)
    },
    { 
        content: '<div>이삭토스트</div>',
        latlng: new kakao.maps.LatLng(14897497418755, 126.91844487791663)
    },
    { 
        content: '<div>수라상</div>',
        latlng: new kakao.maps.LatLng(35.14689328125057, 126.92256767894824)
    },
    { 
        content: '<div>삼진식육식당</div>',
        latlng: new kakao.maps.LatLng(35.15331746794634, 126.91872589043767)
    },
    { 
        content: '<div>엄마주방</div>', 
        latlng: new kakao.maps.LatLng(35.14895025136936, 126.91854092719947)
    },
    { 
        content: '<div>일흥식당</div>', 
        latlng: new kakao.maps.LatLng(35.147116376801996, 126.92258118512606)
    },
    { 
        content: '<div>영성원</div>',
        latlng: new kakao.maps.LatLng(35.146800865467014, 126.92252661415783)
    },
    { 
        content: '<div>마한지</div>',
        latlng: new kakao.maps.LatLng(35.146023209944175, 126.91873314277998)
    },
    { 
        content: '<div>말리화반점</div>',
        latlng: new kakao.maps.LatLng(35.14678967732708, 126.92265008172332)
    },
    { 
        content: '<div>양촌추어탕</div>',
        latlng: new kakao.maps.LatLng(35.14970598614277, 126.91980771073611)
    },
    { 
        content: '<div>화랑궁회관</div>',
        latlng: new kakao.maps.LatLng(35.15204507168566, 126.91655142989092)
    },
    { 
        content: '<div>산수모밀</div>', 
        latlng: new kakao.maps.LatLng(35.148749663628, 126.91848899956986)
    },
    { 
        content: '<div>신신식당</div>', 
        latlng: new kakao.maps.LatLng(35.14950159743731, 126.91745117690571)
    },
    { 
        content: '<div>인천닭곰탕</div>',
        latlng: new kakao.maps.LatLng(35.15274599881451, 126.92007086579214)
    },
    { 
        content: '<div>임실댁 가마솥 추어탕</div>',
        latlng: new kakao.maps.LatLng(35.15229547068816, 126.92030177489906)
    },
    { 
        content: '<div>진진설곰탕</div>',
        latlng: new kakao.maps.LatLng(35.152669517896804, 126.91692118984017)
    },
    { 
        content: '<div>박순자 녹두집</div>',
        latlng: new kakao.maps.LatLng(35.151851184754335, 126.91641444495656)
    },
    { 
        content: '<div>강황울금국밥</div>',
        latlng: new kakao.maps.LatLng(35.150383511867176, 126.91868491011097)
    },
    { 
        content: '<div><strong>좋은국밥</strong></div>', 
        latlng: new kakao.maps.LatLng(35.14920021631917, 126.91829924403929)
    },
    { 
        content: '<div>시안</div>',
        latlng: new kakao.maps.LatLng(35.152637075436964, 126.91562620388538)
    },
    { 
        content: '<div>고기집중</div>', 
        latlng: new kakao.maps.LatLng(35.14781181704716, 126.91785069404654)
    },
    { 
        content: '<div>역전우동0410</div>',
        latlng: new kakao.maps.LatLng(35.147133559947605, 126.91787606713521)
    },
    { 
        content: '<div>대접</div>',
        lalng: new kakao.maps.LatLng(35.15006685247204, 126.9202957171421)
    },
    { 
        content: '<div>별채</div>',
        latlng: new kakao.maps.LatLng(35.151166536686354, 126.92383667752014)
    },
    { 
        content: '<div>고피자</div>',
        latlng: new kakao.maps.LatLng(35.14883086352301, 126.91860414797202)
    },
    { 
        content: '<div>시바카레</div>', 
        latlng: new kakao.maps.LatLng(35.148872360336206, 126.92349861398048)
    },
    { 
        content: '<div>1966생면파스타</div>',
        latlng: new kakao.maps.LatLng(35.15130865071456, 126.92407524175337)
    },
    { 
        content: '<div>청춘덮밥</div>', 
        latlng: new kakao.maps.LatLng(35.14859037803898, 126.9162202438999)
    },
    { 
        content: '<div>호시마츠라멘</div>',
        latlng: new kakao.maps.LatLng(35.14899849014079, 126.92340247126037)
    },
    { 
        content: '<div>에머이</div>',
        latlng: new kakao.maps.LatLng(35.14948176848563, 126.91484754116112)
    },
    { 
        content: '<div>밥도둑</div>',
        latlng: new kakao.maps.LatLng(35.14670191533882, 126.9228394652354)
    },
    { 
        content: '<div>신묘한 곱도리식당</div>',
        latlng: new kakao.maps.LatLng(35.1459390632917, 126.91759194731335)
    },
    { 
        content: '<div>돈부리바쇼 유메노덴</div>',
        latlng: new kakao.maps.LatLng(35.15044626235908, 126.92514330742972)
    },
    { 
        content: '<div>손수김밥</div>', 
        latlng: new kakao.maps.LatLng(35.1490949921613, 126.91932269908297)
    },
    { 
        content: '<div>시골집</div>',
        latlng: new kakao.maps.LatLng(35.14937736408799, 126.92388224184106)
    },
    { 
        content: '<div>윤쉡의 뽕슉</div>',
        latlng: new kakao.maps.LatLng(35.152782179751, 126.92026288864857)
    },
    { 
        content: '<div>서울깍두기</div>',
        latlng: new kakao.maps.LatLng(35.146701008998974, 126.91802739334481)
    },
    { 
        content: '<div>통큰경양식</div>',
        latlng: new kakao.maps.LatLng(35.147872885337776, 126.91818534264206)
    },
    { 
        content: '<div>칠우불고기</div>',
        latlng: new kakao.maps.LatLng(35.15342396474427, 126.91627839465738)
    },
    { 
        content: '<div>롯데리아</div>', 
        latlng: new kakao.maps.LatLng(35.14877957639003, 126.91609384647171)
    },
    { 
        content: '<div>희피희피 평상집</div>',
        latlng: new kakao.maps.LatLng(35.14966511029406, 126.92279277081052)
    },
    { 
        content: '<div>가내수공업</div>',
        latlng: new kakao.maps.LatLng(35.14862254529132, 126.92399543025296)
    },
    { 
        content: '<div>전부</div>',
        latlng: new kakao.maps.LatLng(35.15062802222999, 126.9239140005882)
    },
    { 
        content: '<div>고향청국장</div>',
        latlng: new kakao.maps.LatLng(35.1522175950809, 126.91840871842017)
    },
    { 
        content: '<div>궁동시골밥상</div>',
        latlng: new kakao.maps.LatLng(35.151759620262496, 126.91761900302673)
    },
    { 
        content: '<div>마네키</div>',
        latlng: new kakao.maps.LatLng(35.14946968626795, 126.92377515632677)
    },
    { 
        content: '<div>하동정</div>',
        latlng: new kakao.maps.LatLng(35.149546837145, 126.91770354062274)
    },
    { 
        content: '<div>소복</div>',
        latlng: new kakao.maps.LatLng(35.14844679202759, 126.92401479847261)
    },
    { 
        content: '<div>솔밭솥밥</div>', 
        atlng: new kakao.maps.LatLng(35.15032523419653, 126.92260009481375)
    },
    { 
        content: '<div>뼈대있는집 감자탕</div>',
        latlng: new kakao.maps.LatLng(35.1475368481146, 126.91777140849305)
    },
    { 
        content: '<a href="http://kko.to/CaMjXaMBH"><div>피자헛</div><a>',
        latlng: new kakao.maps.LatLng(35.1518273471001, 126.91780275978456)
    }];

    for (var i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });
    
        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content // 인포윈도우에 표시할 내용
        });
    
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
    
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }
    
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }
