CREATE DATABASE fyw CHARSET=UTF8;
USE fyw;
CREATE TABLE fyw_user(
uid    INT PRIMARY KEY AUTO_INCREMENT,
uname  VARCHAR(20) NOT NULL DEFAULT "",
upwd   VARCHAR(32) NOT NULL DEFAULT "",
nname  VARCHAR(20) NOT NULL DEFAULT "",
phno   VARCHAR(20) NOT NULL DEFAULT ""
);

INSERT INTO fyw_user VALUES(null,'909622852',123456,'xiange18','15219033482');
INSERT INTO fyw_user VALUES(null,'583780581',123456,'xiange','18826489001');

--区域表
CREATE TABLE fyw_area(
aid    INT PRIMARY KEY AUTO_INCREMENT,
aname  VARCHAR(20) NOT NULL DEFAULT ''
);
INSERT INTO fyw_area VALUES
(null,'深圳'),(null,'福田区'),(null,'罗湖区'),(null,'南山区'),(null,'盐田区'),
(null,'宝安区'),(null,'龙岗区'),(null,'龙华区'),(null,'坪山区'),(null,'光明新区'),(null,'大鹏新区');

--房源网-房列表
CREATE TABLE fyw_flist(
fid     INT PRIMARY KEY AUTO_INCREMENT,
fname   VARCHAR(30) NOT NULL DEFAULT '',
price   DOUBLE(8,2) NOT NULL DEFAULT 0,
aid     INT NOT NULL DEFAULT 0,
applyct INT NOT NULL DEFAULT 0,
picture VARCHAR(30) NOT NULL DEFAULT '',
ftype   INT NOT NULL DEFAULT 0
);
--热门房
INSERT INTO fyw_flist VALUES
(null,'卓越蔚蓝山', 66000,2,5243,'hot-big1.jpg',1),
(null,'恒大棕榈岛', 45000,5,5213,'hot-big2.jpg',1),
(null,'恒大依山海湾', 36000,6,5134,'hot-big3.jpg',1),
(null,'保利金町湾', 56000,2,6413,'hot-big4.jpg',1),
(null,'卓越星源', 41000,3,501,'hot-big5.jpg',2),
(null,'天汇城', 40000,2,308,'hot-big6.jpg',2),
(null,'公园·花半里', 37500,1,623,'hot-big7.jpg',2),
(null,'颐安·都会中央2期', 55000,7,1665,'hot-big8.jpg',2),
(null,'麓园', 39000,7,4315,'hot-big9.jpg',3),
(null,'金地龙城中央', 43000,7,7168,'hot-big10.jpg',3),
(null,'THE TOWN乐城', 45000,7,3048,'hot-big11.jpg',3),
(null,'远洋新天地', 39000,7,1304,'hot-big12.jpg',3);

--新房
INSERT INTO fyw_flist VALUES
(null,'好房精选', 66000,2,5243,'index_newbig01.jpg',4),
(null,'恒大棕榈岛', 65000,2,103,'207x138c-1.jpg',4),
(null,'恒大依山海湾', 0,5,1003,'207x138c-2.jpg',4),
(null,'恒大棕榈岛', 63000,6,253,'207x138c-3.jpg',4),
(null,'恒大棕榈岛', 0,3,303,'207x138c-4.jpg',4),
(null,'六月上新', 0,3,303,'index_newbig02.jpg',5),
(null,'恒大棕榈岛', 0,2,103,'207x138c-5.jpg',5),
(null,'恒大依山海湾', 78000,5,1003,'207x138c-6.jpg',5),
(null,'恒大棕榈岛', 66000,6,253,'207x138c-7.jpg',5),
(null,'恒大棕榈岛', 0,3,303,'207x138c-8.jpg',5),
(null,'品质住区', 0,3,303,'index_newbig02.jpg',6),
(null,'恒大棕榈岛', 50000,2,103,'207x138c-9.jpg',6),
(null,'恒大依山海湾', 58000,5,1003,'207x138c-10.jpg',6),
(null,'恒大棕榈岛', 0,6,253,'207x138c-11.jpg',6),
(null,'恒大棕榈岛', 0,3,303,'207x138c-12.jpg',6);

--二手房
INSERT INTO fyw_flist VALUES
(null,'东悦名轩', 66000,2,5243,'resold1.jpg',7),
(null,'西丽众冠花园', 56000,4,5243,'resold2.jpg',7),
(null,'皇庭世纪小区', 46000,9,5243,'resold3.jpg',7),
(null,'桂芳园', 36000,3,5243,'resold4.jpg',7),
(null,'世纪春城', 76000,6,5243,'resold5.jpg',7),
(null,'红树湾小区', 86000,2,5243,'resold6.jpg',7),
(null,'新天鹅堡', 56000,5,5243,'resold7.jpg',8),
(null,'恒大依山海湾', 36000,11,5243,'resold8.jpg',8),
(null,'布吉龙威', 46000,10,5243,'resold9.jpg',8),
(null,'阳光花园五期', 56000,11,5243,'resold10.jpg',8),
(null,'竹沁苑', 26000,9,5243,'resold11.jpg',8),
(null,'丽日翠庭', 36000,8,5243,'resold12.jpg',8),
(null,'西丽众冠花园', 56000,7,5243,'resold13.jpg',9),
(null,'桂芳园', 66000,6,5243,'resold14.jpg',9),
(null,'新天鹅堡', 86000,5,5243,'resold15.jpg',9),
(null,'恒大依山海湾', 96000,4,5243,'resold16.jpg',9),
(null,'丽日翠庭', 56000,2,5243,'resold17.jpg',9),
(null,'世纪春城', 66000,2,5243,'resold18.jpg',9);

--二手房详细信息
CREATE TABLE fyw_indexdetails(
did         INT PRIMARY KEY AUTO_INCREMENT,
intr1       VARCHAR(30) NOT NULL DEFAULT '',
intr2       VARCHAR(30) NOT NULL DEFAULT '',
advantage1  VARCHAR(30) NOT NULL DEFAULT '',
advantage2  VARCHAR(30) NOT NULL DEFAULT '',
fid         INT NOT NULL DEFAULT 0
);

INSERT INTO fyw_indexdetails VALUES
(null,'东悦名轩小区','空中花园会所','主打中小户型','地段好出行方便',28),
(null,'西丽众冠花园','空气好环境宜人','物业好人车分流','住得起的小区',29),
(null,'皇庭世纪小区','空气好环境宜人','户型正格局好','住得起的小区',30),
(null,'桂芳园300万2房','满五年税费少','南北通透','住得起的小区',31),
(null,'世纪春城攻略','4万每平购','2500多户大社区','低密度高绿',32),
(null,'红树湾小区','高尔夫景观物业','大社区典范','滨海环境好',33),
(null,'新天鹅堡','4万每平购','户型正格局好','地段好出行方便',34),
(null,'恒大依山海湾','高尔夫景观物业','户型正格局好','地段好出行方便',35),
(null,'布吉龙威','4万每平购','南北通透','地段好出行方便',36),
(null,'阳光花园五期','空气好环境宜人','大社区典范','低密度高绿',37),
(null,'竹沁苑','高尔夫景观物业','大社区典范','住得起的小区',38),
(null,'丽日翠庭','空中花园会所','南北通透','住得起的小区',39),
(null,'西丽众冠花园','空气好环境宜人','南北通透','地段好出行方便',40),
(null,'桂芳园300万2房','满五年税费少','2500多户大社区','住得起的小区',41),
(null,'新天鹅堡','4万每平购','2500多户大社区','住得起的小区',42),
(null,'恒大依山海湾','高尔夫景观物业','主打中小户型','低密度高绿',43),
(null,'丽日翠庭','空中花园会所','2500多户大社区','低密度高绿',44),
(null,'世纪春城','4万每平购','主打中小户型','住得起的小区',45);



































































































