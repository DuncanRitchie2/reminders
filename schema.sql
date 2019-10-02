create database reminder_app;
use reminder_app;

create table users(
id INT auto_increment NOT NULL,
username varchar(100),
PRIMARY KEY (id,username),
email varchar(100),
date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

show columns from reminders;

create table reminders(
id INT auto_increment PRIMARY KEY,
user_id INT,
reminder VARCHAR(100),
date_added DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
foreign key (user_id) references users(id) 
);

INSERT INTO users (username,email) 
values ('stefanG','stefan@codenation.com'),
('danKrish19','danIs@legend.com'),
('tomo','tom@CN.com'),
('inklingGirl','ink@kgmail.com'),
('ben','benjamin@gmail.com');

INSERT INTO reminders (user_id,reminder) 
values (1,'show all reminders'), (1,'did it work?'),
(2,'delete reminders'),(2,'example 1'),(2,'example 2'),
(3,'update reminders'), (3,'Hopefully it works'),
(4,'add reminders'),
(5,'final note');