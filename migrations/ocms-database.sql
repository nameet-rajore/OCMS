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



INSERT INTO "user"
VALUES ('us123','CS','Rahul_Sharma' ,'Bi123RA',20,6352819991,'user','Rahul1294@Gmail.com','21999');
INSERT INTO "user"
VALUES ('us124','ECE','Vikram_agarwal', 'VIk!@3Sh',19,9765432167,'user','Vikram13494@Gmail.com','20013');
INSERT INTO "user"
VALUES ('us125','Mech','Samyak_Jha','Sam1Ja34' ,21 ,6758712889 ,'user','Sammyl1384@Gmail.com','21167');


INSERT INTO "Order"
VALUES('or1234','12-dec-2021','UPI',800,'us123','ma521');
INSERT INTO "Order"
VALUES('or1235','12-nov-2021','CASH',900,'us125','ma522');
INSERT INTO "Order"
VALUES('or1236','05-dec-2021','UPI',750,'us124','ma523');


INSERT INTO "Uploaded_Material"
VALUES('ma521','https://drive.google.com/file/c/1AkSvdnONezbVTGuSiLwu5b_0gXgMzYzW/view?usp=sharing' ,'12-aug-2020' , 780 ,'npp_lec_notes','us124','cu1561','ca1911');

INSERT INTO "Uploaded_Material"
VALUES('ma522','https://drive.google.com/file/d/1KjGaLH3KUscAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'12-oct-2020' , 880 ,'DSA_lec_notes','us125','cu1562','ca1912');

INSERT INTO "Uploaded_Material"
VALUES('ma523','https://drive.google.com/file/d/1KjGaLH3KUscAHPj_E4ULeDoUo0xgeAfv/view?usp=sharing' ,'12-dec-2020' , 730 ,'OS_lec_notes','us123','cu1563','ca1913');

INSERT INTO "Course"
Values('cu1561',12395,2018,2,'Nuclear Physics','pr16511');

INSERT INTO "Course"
Values('cu1562',13455,2021,1,'DSA','pr16512');

INSERT INTO "Course"
Values('cu1563',19555,2019,2,'OS','pr16513');



INSERT INTO "Professor"
values('pr16511','Rahul_Nigam','21999');
INSERT INTO "Professor"
values('pr16512','Chitranjan_Hota','20013');
INSERT INTO "Professor"
values('pr16513','Barsha_Mitra','21167');

INSERT INTO "Offered_By"
values ('21999','cu1561');

INSERT INTO "Offered_By"
values ('20013','cu1562');

INSERT INTO "Offered_By"
values ('21167','cu1563');


INSERT INTO "College"
values('21999','BITS HYD','hyderabad');
INSERT INTO "College"
values('20013','BITS GOA','goa');
INSERT INTO "College"
values('21167','BITS PILANI','pilani');


INSERT INTO "Category"
values ('ca1911','notes');

INSERT INTO "Category"
values ('ca1912','ppt');

INSERT INTO "Category"
values ('ca1913','lecture');


INSERT INTO "In_Cart"
values ('ma521');
INSERT INTO "In_Cart"
values ('ma522');
INSERT INTO "In_Cart"
values ('ma523');


INSERT INTO "Cart"
values ('us123','ma521');

INSERT INTO "Cart"
values ('us124','ma522');

INSERT INTO "Cart"
values ('us125','ma523');

--DOWN