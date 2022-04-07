from flask import Flask, request, redirect  # 플라스크 모듈을 불러옴
import json
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)  # 전역 객체로 사용할 수 있게 변수에 지정함
app.config['JSON_AS_ASCII'] = False
CORS(app)

#### 플라스크 참고 예제 시작 ####


@app.route('/method', methods=['GET', 'POST'])
def method():
    # request.args["num"] 또는 request.args.get("num")으로 바로 불러올 수도 있음
    
    if request.method == 'GET':
        num = request.args["num"]
        name = request.args.get("name")
        return "GET으로 전달된 데이터({}, {})".format(num, name)
    else:  # request.form["num"]으로 불러올 수 있음
        num = request.form["num"]
        name = request.form["name"]
        return "POST로 전달된 데이터({}, {})".format(num, name)

# request.args : get 방식(쿼리스트링 파싱)
# request.form : post 방식(매개변수가 key, 값이 value인 딕셔너리)


@app.route('/hello/<string:name>')
def hello(name):
    return f"hello {name}"


@app.route('/input/<int:num>')
def input(num):
    name = ''
    if num == 1:
        name = '도라에몽'
    elif num == 2:
        name = '진구'
    elif num == 3:
        name = '퉁퉁이'
    return "hello {}".format(name)


@app.route('/naver')
def daum():
    return redirect("https://naver.com/")
#### 플라스크 참고 예제 끝 ####


# 데코레이터 : app 객체의 route 함수에 request 인자를 넘기면서 http 요청을 처리함(괄호 안에는 라우터 이름이 들어감)
@app.route('/reco')
def reco():  # 데코레이터 url과 함수를 연결함
    num = ""
    input = request.args.get("data")
    num = str(input)

    # 라이브러리 가져오기
    import pandas as pd
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    import pymysql

    # 데이터베이스와 연결하기
    # user : 사용자 이름
    # password : 패스워드
    # host : 데이터베이스가 존재하는 호스트
    # port : 포트번호
    # db : 연결할 데이터베이스 이름
    # charset : 인코딩 설정
    conn = pymysql.connect(host="project-db-stu.ddns.net", port=3307,
                           user="campus_g_0325_2", password="smhrd2", db="campus_g_0325_2", charset="utf8")

    # 연결한 데이터베이스와 상호작용하는 cursor 객체 생성하기
    cursor = conn.cursor(pymysql.cursors.DictCursor)

    # 데이터 조작하기
    # fetchall() : 모든 데이터를 한 번에 가져올 때 사용함
    # fetchone() : 한 번 호출에 하나의 행만 가져올 때 사용함
    # fetchmany(n) : n개의 데이터를 가져올 때 사용함
    # conn.commit() : insert, update, delete 시에 커밋을 위해 필요한 명령어
    sql = "select * from rest_info"
    cursor.execute(sql)
    result = cursor.fetchall()
    기본정보 = pd.DataFrame(result)
    기본정보 = 기본정보.iloc[1:, :]  # 첫 행 오류 임시해결

    sql = "select * from menu_info"
    cursor.execute(sql)
    result = cursor.fetchall()
    메뉴정보 = pd.DataFrame(result)
    메뉴정보 = 메뉴정보.iloc[1:, :]  # 첫 행 오류 임시해결

    # 데이터베이스 연결 해제하기
    conn.close()

    # 개행 문자열 제거하기
    for i in range(기본정보.shape[0]):
        기본정보.iloc[i, 9] = 기본정보.iloc[i, 9].replace("\r", "")
    for i in range(메뉴정보.shape[0]):
        메뉴정보.iloc[i, 7] = 메뉴정보.iloc[i, 7].replace("\r", "")

    # 음식 분류 선택하기(8가지 카테고리 중 하나를 선택함)
    if num == "1":
        num = "백반, 죽, 국수, 한식"
    elif num == "2":
        num = "중식"
    elif num == "3":
        num = "양식"
    elif num == "4":
        num = "돈까스, 회, 일식"
    elif num == '5':
        num = "분식"
    elif num == "6":
        num = "치킨, 피자, 패스트푸드"
    elif num == "7":
        num = "찜, 탕, 찌개, 전골"
    elif num == "8":
        num = "고기, 구이, 족발, 보쌈"

    # 메뉴정보 데이터에서 키워드 추출하기
    메뉴정보["keywords"] = ""
    for i in range(메뉴정보.shape[0]):
        keywords_temp = []
        if 메뉴정보.iloc[i, 3] != "":  # 메뉴명
            keywords_temp.append(메뉴정보.iloc[i, 3])
        if 메뉴정보.iloc[i, 4] != "":  # 대분류
            keywords_temp.append(메뉴정보.iloc[i, 4])
        if 메뉴정보.iloc[i, 5] != "":  # 소분류
            메뉴정보.iloc[i, 5] = 메뉴정보.iloc[i, 5].replace("/", ", ")
            temp = 메뉴정보.iloc[i, 5].split(", ")
            for j in range(len(temp)):
                keywords_temp.append(temp[j])
        if 메뉴정보.iloc[i, 6] != "":  # 자체분류
            메뉴정보.iloc[i, 6] = 메뉴정보.iloc[i, 6].replace("/", ", ")
            temp = 메뉴정보.iloc[i, 6].split(", ")
            for j in range(len(temp)):
                keywords_temp.append(temp[j])
        if 메뉴정보.iloc[i, 7] != "":  # 대표재료
            메뉴정보.iloc[i, 7] = 메뉴정보.iloc[i, 7].replace("/", ", ")
            temp = 메뉴정보.iloc[i, 7].split(", ")
            for j in range(len(temp)):
                keywords_temp.append(temp[j])

        # 중복 키워드 제거하기
        keywords = []
        for k in keywords_temp:
            if k not in keywords:
                keywords.append(k)

        # 쉼표 제거하고 공백으로 키워드 구분하기
        keywords_str = ""
        for l in range(len(keywords)):
            if l == (len(keywords) - 1):
                keywords_str = keywords_str + keywords[l]
            else:
                keywords_str = keywords_str + keywords[l] + " "
        메뉴정보.iloc[i, 8] = keywords_str

    # 입력 받은 음식 분류로 데이터프레임 필터링하고 섞기
    메뉴정보 = 메뉴정보[메뉴정보["category_main"] == num]
    메뉴정보 = 메뉴정보.sample(frac=1)

    # 추출한 키워들로 TF-IDF 벡터화 행렬 만들기
    tfidf_vector = TfidfVectorizer()
    tfidf_matrix = tfidf_vector.fit_transform(메뉴정보["keywords"])

    # 메뉴명 포함 시, 856개 메뉴에 대한 733개의 키워드 확인
    # 메뉴명 미포함 시, 856개 메뉴에 대한 210개의 키워드 확인

    # 모든 메뉴들끼리의 유사도 확인하기
    similarity = cosine_similarity(tfidf_matrix, tfidf_matrix)
    similarity = similarity.tolist()  # 배열을 리스트로 변환함

    # 리스트에서 여러 개 한 번에 인덱싱하는 함수 정의하기
    def multiple_indexing(list_x, list_y):
        return [list_x[i] for i in list_y]

    # 유사도 상위 9개 메뉴에 대한 식당ID, 식당명, 메뉴명 출력하기
    index_top_15 = sorted(range(
        len(similarity[0])), key=lambda i: similarity[0][i], reverse=True)[1:16]  # 인덱스
    similarity_top_15 = pd.Series(multiple_indexing(
        similarity[0], index_top_15))  # 인덱스에 해당하는 유사도
    df_top_15 = 메뉴정보.iloc[index_top_15, [0, 1, 3]]  # 식당ID, 식당명, 메뉴명을 출력함
    df_top_15["similarity"] = ""
    for i in range(len(similarity_top_15)):
        df_top_15.iloc[i, 3] = similarity_top_15[i]
    # 15개를 뽑아서 랜덤으로 섞고 상위 9개를 자르는 이유 : 간단한 재료의 요리는 유사도 1인 항목이 여러 개 나옴
    df_top_9 = df_top_15.sample(frac=1).head(9)

    # 추천 결과에 맞춰서 식당 정보 같이 출력하기
    df_info = 기본정보[["rest_id", "rest_address", "rest_distance",
                    "rest_tel", "rest_ontime", "rest_offtime", "rest_naver"]]
    df_reco = pd.merge(df_top_9, df_info, on="rest_id")
    dic_reco = df_reco.to_dict("index")

    return dic_reco


if __name__ == '__main__':  # 프로그램의 시작점(Java에서 main과 같은 역할을 함)
    app.run(debug=True)  # 스크립트에 수정 사항이 생기면 수정 후 서버를 재시작함(pm2와 같은 역할을 함)
