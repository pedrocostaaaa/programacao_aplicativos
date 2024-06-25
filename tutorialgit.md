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

npx install
