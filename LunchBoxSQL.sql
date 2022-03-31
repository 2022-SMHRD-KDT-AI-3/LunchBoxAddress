#데이터베이스설정
show databases;
#데이터베이스 생성
create database nodejs;
#데이터베이스 사용 **(켤때마다 실행)
use nodejs

# 테이블생성
create table user_info(
	email varchar(100),
    pw varchar(100),
    nick varchar(100),
    like_u varchar(100),
    t_rec int(20),
    t_rev int(20)
);
create table restaurant_info(
	res_id int(100),
    tel varchar(100),
    res_name varchar(100),
    address varchar(100),
    res_cat varchar(100),
    location int(100),
    res_time int(100),
    d_off varchar(100),
    n_star int(100)
);
create table menu_info(
	menu_id int(100),
    res_id int(100),
    menu_name varchar(100),
    category_b int(100),
    category_s int(100),
    kw varchar(100)
);
create table review_info(
	re_id int(100),
	email varchar(100),
    menu_id int(100),
    eval int(100),
    t_score int(100),
    m_score int(100),
    c_score int(100),
    re_date timestamp,
    content varchar(100),
    cook_time int(100),
    wait_time int(100),
    rec int(100),
    pic int(100)
);
create table PIC_info(
	pic_id int(100),
    rev_id int(100),
	p_file varchar(100),
    img_size int(100),
    img_loc varchar(100),
    img_type varchar(100),
    org_n varchar(100)
);
create table BLOG_info(
	blog_id int(100),
    res_id int(100),
    url varchar(100),
    b_date date,
    ad_nonad int(100),
    con_t varchar(100),
    con_b varchar(100),
    word_fr varchar(100)
    
);
#데이터입력
insert into user_info values('1','1','1');

#데이터검색
select * from user_info;
select * from review_info;
#데이터수정
# edit > preferances > sql editor > 맨마지막에 체크(safe update) 풀고 다시시작하기
update user_info 
set pw = '1234'
where email = '1'; 
#데이터삭제
delete from user_info where email = '1'

select * from sessions

grant all privileges on *.* to ‘root’@‘%’ identified by ‘1234’

grant all privileges on *.* root@"%" identified by '1234' with grant option;