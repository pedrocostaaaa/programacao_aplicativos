import parafusomodel from "../Models/parafusomodel.js";

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
        parafusomodel.read().then(
            resposta => {
                console.debug("Mostrando Parafusos");
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug("ERRO ao mostrar parafusos");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_parafuso = req.params.id_parafuso;
        const nome = req.body.nome;

        ParafusoModel.update(id_parafuso, nome).then(
            resposta => {
                console.debug("Atualizando parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar parafusos");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req, res) {
        const id_parafuso = req.params.id_parafuso;
        const nome = req.body.nome;

        ParafusoModel.delete(id_parafuso, nome).then(
            resposta => {
                console.debug("Deletando parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar parafusos");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

}
export default new ParafusosController();
