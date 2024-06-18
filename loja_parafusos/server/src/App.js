import express from 'express'; // importando o express
import ParafusoController from './Controllers/ParafusoController.js';

const server = express(); // iniciando o express


server.use(express.json()) // configurando o json

server.get('/', (req, res) => {
    res.status(200).json("Servidor Funcionando");
});

server.get('/parafusos', ParafusoController.read);
server.post('/parafusos', ParafusoController.create);
server.put('/parafusos/:id_parafuso', ParafusoController.update);
server.delete('/parafusos/:index',ParafusoController.delete);
server.listen(5000);
