import ParafusoModel from "../Models/parafusomodel.js";
class ParafusosController {
    constructor() {
    }

    create(req, res) {
        const nome = req.body.nome;
        ParafusoModel.create(nome).then(
            resposta => {
                console.debug("inserindo um parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: inserindo um parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    read(req, res) {
        res.status(200).json(ParafusoModel.read())
    }

    update(req, res) {
        const index = req.params.index;
        const nome = req.body.nome;

        ParafusoModel.update(index, nome);

        res.status(204).json("Parafuso atualizado")
    }

    delete(req, res) {
        const index = req.params.index;

        ParafusoModel.delete(index);

        res.status(200).json("Deletado");
    }
}

export default new ParafusosController();