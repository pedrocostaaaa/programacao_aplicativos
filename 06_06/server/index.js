const express = require('express');
const server = express()

server.use(express.json())

let usuarios = [
    {id:1,nome:'pedrinho'},
    {id:2,nome:'joaozinho'},
    {id:3,nome:'luquinhas'},
    {id:4,nome:'aninha'},
]


server.get("/",(req,res)=>{
    //res.json("Olá, Mundo")
    res.send('pedrinho');
})

server.get('/usuarios',(req,res)=>{
    res.send(usuarios)


});

server.get('/cadastro',(req,res)=>{
    const nome = req.query.nome
    const senha = req.query.senha

    res.send(nome+senha)
})

server.get('/cadastro_pessoa/:nome',(req,res)=>{
    const nome = req.params.nome
    res.send(nome)
})

server.post('/usuarios',(req,res)=>{
    const id = req.body.id;
    const nome = req.body.nome;

    let usuario ={
        id:id,
        nome:nome
    }

    usuarios.push(usuario)

    res.status(200).json("Usuário Cadastrado");
})

server.listen(5000)