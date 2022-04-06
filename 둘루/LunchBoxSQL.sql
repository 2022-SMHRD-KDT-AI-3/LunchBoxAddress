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
	email varchar(100),
    pw varchar(100),
    nick varchar(100),
    Join_date date
);
create table review_info(
	email varchar(100),
    pw varchar(100),
    nick varchar(100),
    Join_date date
);
create table PIC_info(
	email varchar(100),
    pw varchar(100),
    nick varchar(100),
    Join_date date
);
create table BLOG_info(
	email varchar(100),
    pw varchar(100),
    nick varchar(100),
    Join_date date
);
#데이터입력
insert into nodejs_member values('1','1','1');

#데이터검색
select * from nodejs_member;
select * from message_member;
#데이터수정
# edit > preferances > sql editor > 맨마지막에 체크(safe update) 풀고 다시시작하기
update nodejs_member 
set pw = '1234'
where id = '1'; 
#데이터삭제
delete from nodejs_member where id = '1'

select * from sessions

grant all privileges on *.* to ‘root’@‘%’ identified by ‘1234’

grant all privileges on *.* root@"%" identified by '1234' with grant option;