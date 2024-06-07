const express = require('express');
const server = express()

server.use(express.json())

// criando um CRUD (crete, read, update, delete)
// cada função em uma rota são definidos req e res, req faz referencia arequisição do cliente
/*(navegador, aplicação, insominia, etc) o res é a resposta que será exibida para a solicitação
res.status(código) o status é um número que representa o resultado de uma requisição
como exemplo 200 que representa OK e 404 elemento não encontrado
res.status(codigo).json(mensagem) a mensagem é o que será exibido para o cliente.
*/

// um array d objetos
let usuarios = [
    { nome: 'pedrinho' },
    { nome: 'joaozinho' },
    { nome: 'luquinhas' },
    { nome: 'aninha' },
]


server.get("/", (req, res) => {
    //res.json("Olá, Mundo")
    res.send('pedrinho');
})

server.get('/usuarios', (req, res) => { // o verbo GET e usado para READ
    res.send(usuarios)


});


server.post('/usuarios', (req, res) => { // o verbo POST é usado para o CREATE
    const nome = req.body.nome; // body é o corpo da requisição

    let usuario = {
        nome: nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário Cadastrado");
})

server.put('/usuarios/:index', (req, res) => { // o verbo PUT é usado para o UPDATE
    const index = req.params.index; // params é uma variavél passada via URL
    const nome = req.body.nome

    let usuario = {
        nome: nome
    }

    usuarios[index] = usuario

    res.status(200).json("Usuário atualizado")
})

server.delete('/usuarios/:index', (req, res) => { // o verbo DELETE e usado para o DELETE
    const index = req.params.index;

    usuarios.splice

    res.status(204).json("Usuário deletado")
})


server.listen(5000)