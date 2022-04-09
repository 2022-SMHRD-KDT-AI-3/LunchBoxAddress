$(document).ready(function () {
    $("#hihi").click(function () {
        $(".box").append(`
            
            
        <form action="http://127.0.0.1:3307/test" method="post" enctype="multipart/form-data">
         <table border="0" cellspacing="5">

        <tr>

            
                <td align="center" width="900">총평가</td>
            

            <td>
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

            <tr>
                <td align="center">사진등록</td>
                <td>
                    <div class="upload"><p>
                        <input type="file" name="userfile">
                       
                    </p></div>

                </td>
            </tr>

            <tr>
                <td align="center">맛</td>
                <td>
                    <p>
                        <input type="radio" name="t_score" id="taste1" value="1">불만족
                        <input type="radio" name="t_score" id="taste2" value="2">보통
                        <input type="radio" name="t_score" id="taste3" value="3">만족
                    </p>

                </td>
            </tr>
            
            <tr>
                <td align="center">가격</td>
                <td>
                    <p>
                        <input type="radio" name="m_score" id="price1" value="1">불만족
                        <input type="radio" name="m_score" id="price2" value="2">보통
                        <input type="radio" name="m_score" id="price3" value="3">만족
                    </p>

                </td>
            </tr>
            
            <tr>
                <td align="center">서비스</td>
                <td>
                    <p>
                        
                        <input type="radio" name="c_score" id="service1" value="1">불만족
                        <input type="radio" name="c_score" id="service2" value="2">보통
                        <input type="radio" name="c_score" id="service3" value="3">만족
                    </p>

                </td>
            </tr>

            
            <tr>
                <td align="center">회전율 </td>
                <td>
                    <select name="cook_time" id="">

                        <option value="empty">선택하세요</option>
                        <option value="느림">느림</option>
                        <option value="보통">보통</option>
                        <option value="빠름">빠름</option>

                    </select>
                </td>
                
            </tr>
            <!-- <tr bgcolor="White"> -->
            <tr>
                <td align="center">대기시간 </td>
                <td>
                    <select name="wait_time" id="">

                        <option value="empty">선택하세요</option>
                        <option value="없음">없음</option>
                        <option value="0m">~15분</option>
                        <option value="15m">15분~30분</option>
                        <option value="30m">30분이상</option>

                    </select>
                </td>
            </tr>

            <tr>
                <td align="center">상세리뷰</td>
                <td colspan="2">
                    <textarea name="contents" id="" cols="60" rows="5" style="resize: none;" placeholder="의견을 자유롭게 적어주세요"></textarea>
                </td>

            </tr>
            <tr>
                <td></td>
                <td>
                <div class="section">
                        <label class="checkbox"><input id="ckb_oath" type="checkbox" value="Y">
                        위 작성된 평가는 허위후기, 음식점 관련자의 홍보성 내용,<br>
                        경쟁업소의 왜곡된 평가가 아님을 서약합니다.</div><br>
            
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" id="submitbtn" value="작성하기">
                </td>

            </tr>

        </table>
    </form>
            
            
            
    `);
    });
}); 