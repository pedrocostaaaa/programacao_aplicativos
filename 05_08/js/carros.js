

// a função pop remove apenas o último elemento
/*function removerCarro(arrayCarro) {
    arrayCarro.pop()
    console.log(arrayCarro)
}*/

function removerCarro(index) {
    // o método splice altera o conteúdo de uma lista podendo adiconar enquanto remove elemento
    // Abaixo vamos remover um elemento específico
    carros.splice(index, 1)
    // index representa a posição do array e o número de itens
    carregarCarros()
}

// inicializando um array vazio
let carros = []
// criando um carro uno
let uno = new Carro("fiat", "xxy-4502", "vermelho", 2012)
carros.push(uno) // acrescentando o uno no array de carros

// criando um carro fusca
let fusca = new Carro("volkswagen", "uuu-8978", "branco", 1980)
carros.push(fusca) // acrescentar no array de carros

// criando um carro strada
let strada = new Carro("fiat", "xxx-2020", "branco", 2014)
carros.push(strada) // acrescentar no array de carros

// criando um carro onix
let onix = new Carro("chevrolet", "pps-1420", "branco", 2023)
carros.push(onix) // acrescentar no array de carros

function carregarCarros() {
    let html = "<tr><th>Index</th>"
        html += "<th>Marca</th>"
        html += "<th>Placa</th>"
        html += "<th>Cor</th>"
        html += "<th>Ano</th>"
        html += "<th>Deletar</th></tr>"

    for (let i = 0; i < carros.length; i++) {
        html += "<tr>"
        html += "<td>" + i + "</td>"
        html += "<td>" + carros[i].marca + "</td>"
        html += "<td>" + carros[i].placa + "</td>"
        html += "<td>" + carros[i].cor + "</td>"
        html += "<td>" + carros[i].ano + "</td>"
        html += '<td><button onclick = "removerCarro('+i+')">Deletar</button></td>'
        html += "</tr>"
    }

    document.getElementById("listaCarros").innerHTML = html
}

function cadastrarCarro() {
    let marca = document.getElementById("marca").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let ano = parseInt(document.getElementById("ano").value)

    let carro = new Carro(marca, placa, cor, ano)

    carros.push(carro)
    carregarCarros()

}

//removerCarro(carros)