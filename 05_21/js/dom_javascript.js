// quando a página web é carregada o navegador cria um document object model (DOM)
// o dom possui uma árvore de objetos

document.getElementById("saudacao").innerHTML = "Boa tarde, terça-feira"
// adcionando uma saudação a uma div com id saudação

let h1 = document.getElementsByTagName("h1")// pegando um array com todos os elementos h1

h1[0].innerText = "Introducao"
h1[1].innerText = "SENAI Porto"

let descricao = document.getElementsByClassName("descricao")// pegando um array com cada elemento com tag descricao

for (let i = 0;i < descricao.length;i++){
    descricao[i].innerText = "Div"+i
}

function alterandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")
}