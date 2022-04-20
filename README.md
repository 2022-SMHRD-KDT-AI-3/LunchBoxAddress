# Git 이용 가이드
어쩔코딩 저쩔에러팀 화이팅🤞

1. 매일 아침 9시(주말포함)pull 받고 개발 들어가기
2. 아침 회의때 각자 당일 수정할 파일 정하기
3. 만약에 다른 사람이 수정하는 파일을 수정해야할 경우에는 그 사람에게 말하기
4. push는 자신의 하루 분량이 끝났을때만 push하기
5. push 하기 전에 팀 톡방에 말하고 push하기. 말할때는 개발한 기능과 이름을 명시
	ex) 로그인 기능 버그 수정 - 찬둘루
6. push 코멘트는 자기가 개발한 기능과 자신의 이름 적기
	ex) 로그인 기능 버그 수정 - 찬둘루

# 서비스소개	
- 스마트 인재 개발원 수강생들을 위한 식당 및 점심메뉴 추천 서비스
- Challenge Point : 추천 알고리즘(코사인 유사도 활용)

# 주요 기능
✅ 식당 및 메뉴 추천 기능<br>
◾ 테마별로 분류된 카테고리를 선택<br>
◾ 선택하면 해당하는 음식점의 이름, 썸네일, 거리 정보를 표시<br>

✅ 식당 정보 열람<br>
◾ 현재 위치와 식당간의 거리 정보를 지도로 표시<br>
◾ 식당 이름, 주소, 연락처, 업종, 영업시간, 평균 별점 등 대표 정보를 표시<br>
◾ 음식점의 간략한 메뉴 정보(메뉴 이름, 가격) 소개<br>

✅ 사용자 리뷰 조회<br>
◾ 평균 별점<br>
◾ 맛, 가격, 서비스 총 3가지 항목별 별점<br>
◾ 방문 후기<br>

✅ 블로그 리뷰 조회<br>
◾ ① 광고성 리뷰 + 비 광고성 리뷰 목록을 보여주고, ② 사용자가 비교하며 볼 수 있도록 한 페이지에서 페이지 분할<br>

✅ 회원 리뷰 작성<br>
◾ 항목 <br>
  1️⃣ 사진등록 <br>
  2️⃣ 별점[맛, 가격, 서비스]<br>
  3️⃣ 회전률<br>
  4️⃣ 텍스트박스로 리뷰 작성<br>
  5️⃣ 메뉴추천 등<br>

# 데이터베이스 요구사항
1. Lunch Box에 회원으로 가입하려면 회원이메일, 비밀번호, 닉네임, 성별을 입력해야한다. <br>
2. 가입한 회원에게는 메뉴추천 및 식당을 추천한다.<br>
3. 회원은 회원아이디로 식별한다.<br>
4. 식당에 대한 식당아이디, 연락처, 식당명, 주소, 식당업태, 거리, 영업시간, 휴무일 정보를 유지해야한다.<br>
5. 식당은 식당아이디로 식별한다.<br>
6. 회원은 여러 식당정보를 열람할 수 있고, 하나의 식당을 여러 회원이 열람할 수 있다.<br>
7. 회원이 식당을 열람할 때 메뉴는 메뉴아이디, 식당아이디, 메뉴명, 메뉴카테고리구분(대), 메뉴카테고리구분(소), 재료, 메뉴정보키워드 정보를 유지해야 한다.<br>
8. 모든 식당은 스마트인재개발원을 중심으로 500m내의 위치에 존재한다.<br>
9. 식당 하나는 여러 메뉴를 공급할 수 있다.<br>
10. 비회원과 회원 구분없이 회원리뷰와 블로그 리뷰를 열람할 수 있다.<br>
11. 블로그 리뷰는 블로그아이디, 식당아이디, url, 블로그리뷰 작성일자, 광고/비광고 구분자, 게시글 제목, 게시글 내용, 단어빈도수의 정보를 유지해야 한다. <br>
12. 블로그 리뷰는 광고성 리뷰와 비광고성 리뷰로 구분한다.<br>
13. 블로그 정보는 블로그 아이디로 식별한다.<br>
14. 회원은 리뷰를 여러 개 작성할 수 있다.<br>
15. 식당에서 리뷰를 제공하면 리뷰에 대한 아이디, 식당아이디, 회원이메일, 총평가, 작성일자, 리뷰내용, 회전율, 대기시간, 첨부파일 사진 url 의 정보를 유지해야한다.<br>
16. 리뷰는 리뷰아이디로 식별한다.<br>


	
# 대표이미지
✅ 메인 페이지
![main](https://user-images.githubusercontent.com/80933744/164146706-177ddd1f-3f34-4da5-b527-20d8c66ac797.jpg)
✅ 식당 페이지
![세부](https://user-images.githubusercontent.com/80933744/164146715-baec17aa-37f5-46ed-8b5d-d3a8a5cb73cb.jpg)
