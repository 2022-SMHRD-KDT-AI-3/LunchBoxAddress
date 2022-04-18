$(document).ready(function () {
    $("#hihi").click(function () {
        $("#reviewhi").empty();
        $("#reviewhi").prepend(`
    <div class="box counts section-bg" id="counts">    
        <form action="http://127.0.0.1:3307/test" class="r_f" method="post" enctype="multipart/form-data">
        <div id="shadow">
        <table class="table" border="0" cellspacing="5">
        <tr class=" siv" id="star" height="100px;"> 
            <td class="line" align="center"><strong>총평가</strong></td>
            <td width="400px">
                <div class="star-rating space-x-4 mx-auto">
                    <input type="radio" id="5-stars" name="eval" value="5" v-model="ratings"/>
                    <label for="5-stars" class="star pr-4">★</label>
                    <input type="radio" id="4-stars" name="eval" value="4" v-model="ratings"/>
                    <label for="4-stars" class="star">★</label>
                    <input type="radio" id="3-stars" name="eval" value="3" v-model="ratings"/>
                    <label for="3-stars" class="star">★</label>
                    <input type="radio" id="2-stars" name="eval" value="2" v-model="ratings"/>
                    <label for="2-stars" class="star">★</label>
                    <input type="radio" id="1-star" name="eval" value="1" v-model="ratings"/>
                    <label for="1-star" class="star">★</label>
                </div>
            </td>
        </tr>
            <tr id="nonon">
                <td align="center" class="line" ><strong>사진등록</strong></td>
                <td>
                    <div class="upload"><p>
                        <label for="ex_file">업로드</label>
                        <input type="file" name="userfile" id="ex_file">
                    </p></div>
                </td>
            </tr>
            <tr>
                <td align="center" class="line" ><strong>맛</strong></td>
                <td width="400px">
                    <p class="radio">
                        <label><input type="radio" name="t_score" id="taste1" value="맛이 별로에요">  맛이 별로에요</label>
                        <label><input type="radio" name="t_score" id="taste2" value="괜찮았어요">  괜찮았어요</label>
                        <label><input type="radio" name="t_score" id="taste3" value="또 오고 싶어요">  또 오고 싶어요</label>
                    </p>

                </td>
            </tr>
            
            <tr>
                <td align="center" class="line" ><strong>가격</strong></td>
                <td width="400px">
                    <p class="radio">
                        <label><input type="radio" name="m_score" id="price1" value="돈이 아까워요">  돈이 아까워요</label>
                        <label><input type="radio" name="m_score" id="price2" value="부담 없이 먹었어요">  부담 없이 먹었어요</label>
                        <label><input type="radio" name="m_score" id="price3" value="완전 가성비 최고에요">  완전 가성비 최고에요</label>
                    </p>

                </td>
            </tr>
            
            <tr>
                <td  align="center" class="line" ><strong>서비스</strong></td>
                <td width="400px">
                    <p class="radio">
                        
                        <label><input type="radio" name="c_score" id="service1" value="불친절해요">  불친절해요</label>
                        <label><input type="radio" name="c_score" id="service2" value="괜찮았어요">  괜찮았어요</label>
                        <label><input type="radio" name="c_score" id="service3" value="친절하고 좋아요">  친절하고 좋아요</label>
                    </p>

                </td>
            </tr>

            
            <tr>
                <td align="center" class="line" ><strong>회전율</strong></td>
                <td>
                    <select name="cook_time" id="">

                        <option value="">선택하세요</option>
                        <option value="음식이 늦게 나와요">음식이 늦게 나와요</option>
                        <option value="시간 맞춰 잘 나왔어요">시간 맞춰 잘 나왔어요</option>
                        <option value="자리에 앉자마자 나왔어요">자리에 앉자마자 나왔어요</option>

                    </select>
                </td>
  
                <td align="center" class="line" ><strong></strong> </td>
                <td>
                   
                </td>
            </tr>

            <tr>
            <td align="center" class="line" ><strong>대기시간</strong> </td>
            <td>
                <select name="wait_time" id="">

                    <option value="">선택하세요</option>
                    <option value="없음">바로 자리에 앉았어요</option>
                    <option value="15분 미만">15분 정도 기다렸어요</option>
                    <option value="30분 가까이 기다렸어요">30분 가까이 기다렸어요</option>
                    <option value="30분 이상 기다렸어요">30분 이상 기다렸어요</option>

                </select>
            </td>

            <td align="center" class="line" ><strong></strong></td>
            <td>
                
            </td>

            
        </tr>


            <tr>
                <td align="center"class="line" ><strong>상세리뷰</strong></td>
                <td colspan="2">
                    <textarea name="contents" id="conten" cols="60" rows="5" style="resize: none;" placeholder="의견을 자유롭게 적어주세요"></textarea>
                </td>

            </tr>
            <tr id="infom">
                <td></td>
                <td>
                <div class="section">
                        <label class="checkbox"><input id="ckb_oath" type="checkbox" value="Y">
                        위 작성된 평가는 허위후기, 음식점 관련자의 홍보성 내용,<br>
                        경쟁업소의 왜곡된 평가가 아님을 서약합니다.</div><br>
            
                </td>
            </tr>
            <tr class="btn" >
                <td colspan="2"  >
                    <input type="submit" id="submitbtn" onClick="history.go(0)" value="작성하기">
                     <label for="submitbtn">작성하기</label>
                </td>

            </tr>

        </table>
        </div>
    </form>
            
</div>          
            
    `);
    });
}); 