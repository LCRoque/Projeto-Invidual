create database cr7forum;
use cr7forum;

create table usuario (
	id int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table noticias (
	id int primary key auto_increment,
    titulo varchar(45),
    descricao varchar(250),
    fk_usuario int,
    foreign key (fk_usuario) references usuario(id)
);

select * from usuario;	
select * from noticias;
