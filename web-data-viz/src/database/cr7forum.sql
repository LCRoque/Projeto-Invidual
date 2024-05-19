create database cr7forum;
use cr7forum;

create table usuario (
	id int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

select * from usuario;	
