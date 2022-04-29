--UP
Create Table "College"(
College_id VarChar(20) NOT NULL PRIMARY KEY,
College_name Char(20),
Location VarCHar(20)
);

Create table "user" (
User_id varchar(20) NOT NULL,
Branch char(20),
User_name char(20),
User_password varchar(20) NOT NULL,
Age Int,
Phone_Number Int,
Role Char(8) check(Role='admin' or Role='user'),
Email_id varchar(30) UNIQUE ,
College_id varchar(30) NOT NULL,
PRIMARY KEY(User_id),
CONSTRAINT clgid3 FOREIGN KEY(College_id) REFERENCES "College"(College_id)
);

Create Table "Category"(
Category_id VarChar(20) NOT NULL PRIMARY KEY,
Category_Name Char(20)
);

Create table "Professor"(
Prof_id VarChar(20) NOT NULL,
Prof_Name Char(50),
College_id VarChar(20),
PRIMARY KEY (Prof_id),
CONSTRAINT clgid FOREIGN KEY(College_id) REFERENCES "College"(College_id)
);

Create Table "Course"(
Cu_id Varchar(20) NOT NULL,
Course_id INT,
Year INT,
Semester INT,
Course_name Varchar(20),
Prof_id VarChar(20),
PRIMARY KEY (Cu_id)
CONSTRAINT profid FOREIGN KEY(Prof_id) REFERENCES "Professor"(Prof_id)
);

Create table "Uploaded_Material"(
Material_ID Varchar(20) NOT NULL,
Drive_Link Varchar(90) NOT NULL,
Uploaded_on Date,
Cost Int,
Title Char(20),
User_id varchar(20) NOT NULL,
Cu_id varchar(20) NOT NULL,
category_Id Varchar(20) NOT NULL,
PRIMARY KEY (Material_ID),
CONSTRAINT userid2 FOREIGN KEY(User_id) REFERENCES "user"(User_id),
CONSTRAINT cuid FOREIGN KEY(Cu_id) REFERENCES "Course"(Cu_id),
CONSTRAINT catid FOREIGN KEY(Category_id) REFERENCES "Category"(Category_id)
);


Create Table "Order"(
Order_id varchar(20) NOT NULL,
Downloaded_on Date ,
Payment_Mode Varchar(20),
Amount Int,
User_id Varchar(20) NOT NULL,
Material_ID Varchar(20) NOT NULL,
PRIMARY KEY (Order_id),
CONSTRAINT Userid FOREIGN KEY(User_id) REFERENCES "user"(User_id),
CONSTRAINT matid FOREIGN KEY(Material_ID) REFERENCES "Uploaded_Material"(Material_ID)
);

Create Table "In_Cart"(
Material_id Varchar(20) NOT NULL PRIMARY KEY,
CONSTRAINT matid3 FOREIGN KEY(Material_id) REFERENCES "Uploaded_Material"(Material_id)
);

Create Table "Cart"(
User_id varchar(20) NOT NULL,
Material_id VarChar(20) NOT NULL,
PRIMARY KEY(User_id,Material_id),
 CONSTRAINT matid4 FOREIGN KEY(Material_id) REFERENCES "In_Cart"(Material_id),
 CONSTRAINT usid3 FOREIGN KEY(User_id) REFERENCES "user"(User_id)
);

Create Table "Offered_By"( 
College_id VarChar(20) NOT NULL,
Cu_id VarChar(20) NOT NULL,
PRIMARY KEY (College_id,Cu_id),
CONSTRAINT cuid2 FOREIGN KEY(Cu_id) REFERENCES "Course"(Cu_id),
 CONSTRAINT clgid2 FOREIGN KEY(College_id) REFERENCES "College"(College_id)
);


INSERT INTO College
values('21999','BITS HYD','hyderabad');
INSERT INTO College
values('20013','BITS GOA','goa');
INSERT INTO College
values('21167','BITS PILANI','pilani');
INSERT INTO College
values('21168','IIT MUMBAI','mumbai');
INSERT INTO College
values('21169','SRM','chennai');
INSERT INTO College
values('21170','MIT','manipal');
INSERT INTO College
values('21171','IIT KHARAGPUR','kharagpur');
INSERT INTO College
values('21172','NIT SURAT','surat');
INSERT INTO College
values('21173','NIT TRICHY','tiruchirappalli');
INSERT INTO College
values('21174','BIT MESRA','ranchi');




INSERT INTO user
VALUES ('us123','CS','Rahul Sharma' ,'Bi123RA',20,6352819991,'user','Rahul1294@gmail.com','21999');
INSERT INTO user
VALUES ('us124','ECE','Vikram Agarwal', 'VIk!@3Sh',19,9765432167,'user','Vikram13494@gmail.com','20013');
INSERT INTO user
VALUES ('us125','Mech','Samyak Jha','Sam1Ja34' ,21 ,6758712889 ,'user','Sammyl1384@gmail.com','21167');
INSERT INTO user
VALUES ('us126','Chem','Utkarsh Shah' ,'uk123RA',20,786519991,'user','Utkarsh1294@gmail.com','21168');
INSERT INTO user
VALUES ('us127','CS','Kapil Sharma' ,'Ka123RA',20,6352815551,'user','Kapil1294@gmail.com','21169');
INSERT INTO user
VALUES ('us128','Civil','Shashank Verma' ,'sa123RA',20,122815551,'user','Shashank1294@gmail.com','21170');
INSERT INTO user
VALUES ('us129','MSC PHYSICS','Soutik Gupta' ,'so123RA',20,652819951,'user','SOutik1294@gmail.com','21171');
INSERT INTO user
VALUES ('us130','MSC BIO','Suket Agarwal' ,'suk123RA',20,652719951,'user','Suiket1294@gmail.com','21172');
INSERT INTO user
VALUES ('us131','Chem','Samar Sharma' ,'mar123RA',20,652834951,'user','Samar1294@gmail.com','21173');
INSERT INTO user
VALUES ('us132','ECE','Aditya Mohinta' ,'ad123RA',20,656919951,'user','adi1294@gmail.com','21174');




INSERT INTO Category
values ('ca1911','notes');
INSERT INTO Category
values ('ca1912','ppt');
INSERT INTO Category
values ('ca1913','lecture');
INSERT INTO Category
values ('ca1914','Recorded lectures');
INSERT INTO Category
values ('ca1915','Source material');
INSERT INTO Category
values ('ca1916','TextBook');
INSERT INTO Category
values ('ca1917','Student notes');
INSERT INTO Category
values ('ca1918','Solution manual');
INSERT INTO Category
values ('ca1919','Tut notes');
INSERT INTO Category
values ('ca1920','Full Course');


INSERT INTO Professor
values('pr16511','Rahul Nigam','21999');
INSERT INTO Professor
values('pr16512','Chitranjan Hota','20013');
INSERT INTO Professor
values('pr16513','Barsha Mitra','21167');
INSERT INTO Professor
values('pr16514','Shubam Bannergee','21168');
INSERT INTO Professor
values('pr16515','Lov Kumar','21169');
INSERT INTO Professor
values('pr16516','Kartik Chetan','21170');
INSERT INTO Professor
values('pr16517','Sandeep Monga','21171');
INSERT INTO Professor
values('pr16518','Biswas Desai','21172');
INSERT INTO Professor
values('pr16519','John Lee','21173');
INSERT INTO Professor
values('pr16520','Neha Mittal','21174');



INSERT INTO Course
Values('cu1561',12395,2018,2,'Nuclear Physics','pr16511');
INSERT INTO Course
Values('cu1562',13455,2021,1,'DSA','pr16512');
INSERT INTO Course
Values('cu1563',19555,2019,2,'OS','pr16513');
INSERT INTO Course
Values('cu1564',12435,2017,1,'Solid State Physics','pr16514');
INSERT INTO Course
Values('cu1565',19556,2018,2,'Quantum Mechanics','pr16515');
INSERT INTO Course
Values('cu1566',19558,2020,1,'Fluid Mechanics','pr16516');
INSERT INTO Course
Values('cu1567',19557,2019,2,'Classical Mechanics','pr16517');
INSERT INTO Course
Values('cu1568',19559,2022,1,'Maths-3','pr16518');
INSERT INTO Course
Values('cu1569',19560,2021,2,'Maths-1','pr16519');
INSERT INTO Course
Values('cu1570',19561,2019,1,'Maths-2','pr16520');




INSERT INTO Uploaded_Material
VALUES('ma521','https://drive.google.com/file/c/1AkSvdnONezbVTGuSiLwu5b_0gXgMzYzW/view?usp=sharing' ,'12-aug-2020' , 780 ,'NPP Notes','us124','cu1561','ca1911');
INSERT INTO Uploaded_Material
VALUES('ma522','https://drive.google.com/file/d/1KjGaLH3KUscAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'12-oct-2020' , 880 ,'DSA Notes','us125','cu1562','ca1912');
INSERT INTO Uploaded_Material
VALUES('ma523','https://drive.google.com/file/d/1KjGaLH3KUscAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'12-dec-2020' , 730 ,'OS Notes','us123','cu1563','ca1913');
INSERT INTO Uploaded_Material
VALUES('ma524','https://drive.google.com/file/d/1KhgygTThyT_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'31-oct-2020' , 380 ,'Solid State Notes','us129','cu1564','ca1914');
INSERT INTO Uploaded_Material
VALUES('ma525','https://drive.google.com/file/d/1KjHIiaSD3KUscAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'14-nov-2021' , 760 ,'QM Notes','us128','cu1565','ca1915');
INSERT INTO Uploaded_Material
VALUES('ma526','https://drive.google.com/file/d/EIurRWEVky6e_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'19-Aug-2017' , 650 ,'Fluid Textbook','us131','cu1566','ca1916');
INSERT INTO Uploaded_Material
VALUES('ma527','https://drive.google.com/file/d/1%frttfi%ERFKY_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'30-Jan-2019' , 600 ,'Classical Mech Notes','us132','cu1567','ca1917');
INSERT INTO Uploaded_Material
VALUES('ma528','https://drive.google.com/file/d/HIYRuytfkrdRTGgdgDT_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'16-May-2020' , 790 ,'Maths-3 Solution manual','us126','cu1568','ca1918');
INSERT INTO Uploaded_Material
VALUES('ma529','https://drive.google.com/file/d/LyoyfkuuTFYTkvtIDFgkfYtj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'22-jul-2022' , 800 ,'Maths-2 Tut Notes','us127','cu1570','ca1919');
INSERT INTO Uploaded_Material
VALUES('ma530','https://drive.google.com/file/d/IbugYiiuGIUiu_cAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'27-Apr-2021' , 1000 ,'Maths-1 HW','us130','cu1569','ca1920');	


INSERT INTO "Order"
VALUES('or1234','12-dec-2021','UPI',800,'us123','ma521');
INSERT INTO "Order"
VALUES('or1235','12-nov-2021','CASH',900,'us125','ma522');
INSERT INTO "Order"
VALUES('or1236','05-dec-2021','UPI',750,'us124','ma523');
INSERT INTO "Order"
VALUES('or1237','19-oct-2022','UPI',400,'us129','ma524');
INSERT INTO "Order"
VALUES('or1238','09-aug-2022','UPI',780,'us132','ma525');
INSERT INTO "Order"
VALUES('or1239','07-jan-2022','UPI',670,'us128','ma526');
INSERT INTO "Order"
VALUES('or1240','30-mar-2022','UPI',620,'us126','ma527');
INSERT INTO "Order"
VALUES('or1241','05-feb-2022','UPI',810,'us127','ma528');
INSERT INTO "Order"
VALUES('or1242','04-apr-2022','UPI',820,'us130','ma529');
INSERT INTO "Order"
VALUES('or1243','14-apr-2022','UPI',750,'us131','ma530');



INSERT INTO In_Cart
values ('ma521');
INSERT INTO In_Cart
values ('ma522');
INSERT INTO In_Cart
values ('ma523');
INSERT INTO In_Cart
values ('ma524');
INSERT INTO In_Cart
values ('ma525');
INSERT INTO In_Cart
values ('ma526');
INSERT INTO In_Cart
values ('ma527');
INSERT INTO In_Cart
values ('ma528');
INSERT INTO In_Cart
values ('ma529');
INSERT INTO In_Cart
values ('ma530');



INSERT INTO Cart
values ('us131','ma521');
INSERT INTO Cart
values ('us130','ma522');
INSERT INTO Cart
values ('us123','ma523');
INSERT INTO Cart
values ('us125','ma524');
INSERT INTO Cart
values ('us124','ma525');
INSERT INTO Cart
values ('us126','ma526');
INSERT INTO Cart
values ('us127','ma527');
INSERT INTO Cart
values ('us129','ma528');
INSERT INTO Cart
values ('us132','ma529');
INSERT INTO Cart
values ('us128','ma530');



INSERT INTO Offered_By
values ('21999','cu1561');
INSERT INTO Offered_By
values ('20013','cu1562');
INSERT INTO Offered_By
values ('21167','cu1563');
INSERT INTO Offered_By
values ('21168','cu1564');
INSERT INTO Offered_By
values ('21169','cu1565');
INSERT INTO Offered_By
values ('21170','cu1566');
INSERT INTO Offered_By
values ('21171','cu1567');
INSERT INTO Offered_By
values ('21172','cu1568');
INSERT INTO Offered_By
values ('21173','cu1569');
INSERT INTO Offered_By
values ('21174','cu1570');


--DOWN