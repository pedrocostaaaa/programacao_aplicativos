Começando projeto novo
git init

//Como clonar um repositório 
git clone https://github.com/RamonNew/programacao_aplicativos.gif

//Configurando
git config user.email "exemplo@gmail.com"
git config user.name "Ramon de Holanda"

//Selecionando a branch
git branch -M main
git remote add origin https://github.com/RamonNew/programacao_aplicativos.git

//adicionando arquivos
git add .

//colocando comentario do commit "comitar"
git commit -m "O que foi realizado"

//Subindo alterações
git push -u origin main

create database loja_parafusos;

use loja_parafusos;

create table parafusos(
	id_parafuso int primary key auto_increment,
    nome varchar(45)
);

-- iniciando o CRUD
-- insert é o CREATE
insert into parafusos (nome) values
("estrela"),
("frances"),
("máquina")
;

-- SELECT read
select * from parafusos;

-- UPDATE é update
update parafusos set nome="fenda" where id_parafuso=1;

-- DELETE é delete

delete from parafusos where id_parafuso=1;

npx nodemon src/App.js


cd 04_05 
cd server 

post create

get read

put update

delete delete

npm install nodemon

npm install express

npm install mysql2

create DATABASE loja_doces;

use loja_doces;

create table categoria (
 id_categoria int primary key AUTO_INCREMENT,
 nome_categoria VARCHAR(15) not null
);

insert into categoria (nome_categoria) VALUES
("bolos"), ("tortas"), ("doces finos"), ("doces tradicionais");
 
select * from categoria;

create table doces (
	id_doce int primary key AUTO_INCREMENT,
    nome_doce VARCHAR(30) not null,
    id_categoria INT not null,
    FOREIGN KEY (id_categoria) references categoria(id_categoria)
);

insert INTO doces (id_categoria,nome_doce) values
(1,"Red velvet"),
(1,"Bolo de laranja"),
(2,"Torta de frango");

SELECT * from doces;




