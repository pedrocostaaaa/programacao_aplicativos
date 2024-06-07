import express from 'express'; // importando o express
import {ParafusosController} from './Controllers/ParafusosController.js';
const parafusosController = new ParafusosController();



const server = express (); // iniciando o express


server.use(express.json()) // configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/parafusos',parafusosController.read);

server.listen(5000);