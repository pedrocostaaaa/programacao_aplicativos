import ParafusoModel from "../Models/parafusomodel.js";
class ParafusosController {
    constructor() {
        this.parafusos = [
            { nome: "sextavado" },
            { nome: "frances" },
            { nome: "máquina" },
        ];
    }

    create(req, res) {
        const nome = req.body.nome;
        ParafusoModel.create(nome);
        res.status(201).json("Parafuso criado");
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