/*
//PROG. DES. DE SISTEMA
//REVISÃO PARA AVALIAÇÃO

//carrinho de compra

let carrinho = [] //array vazio

function addProduto(produto){
    carrinho.push(produto)
    console.log("carrinho", carrinho)
}
function removeUltimoProduto(){
    carrinho.pop();
    console.log("carrinho", carrinho)
}
addProduto("Camiseta")
addProduto("Sapato")
addProduto("Calça")
removeUltimoProduto()
*/

/*
let car = ["camisera","sapato","calça"]
car.push("bermuda")
console.log(car)
car.pop()
console.log(car)
*/

/*
//FILA DE ATENDEMENTO
let fila=[]

fila.unshift("Ana") //adiciona no inicio
fila.unshift("Beatriz")
fila.unshift("Carlos")
fila.unshift("Henrique")
fila.unshift("Giovana")

if(fila.length > 3) fila.pop() //remove o ultimo se ultrapassar o limite
console.log("Fila: ", fila)
*/
/*
//UTILIZANDO O FOR
let fila=[]
let fila=["Ana","Carlos","Beatriz","Daniel"]
let limite = 3

for(let i = 0; i < clearInterval.length; i++){
    fila.unshift(Daniel[i])

    if(fila.length > limite) {
        fila.pop() //remove o ultimo
    }
    console.log("fila", fila)
}
*/

/*
//ESTOQUE DE PEÇAS
let estoque = ["peçaUm", "peçaDois", "peçaTres"]

function atualizarEstoque(novaPeca){
    estoque.unshift(novaPeca);
    estoque.pop();
    console.log("Estoque", estoque)
}
atualizarEstoque("Peça Nova")
atualizarEstoque("Outra Peça")
*/

/*
//PLATAFORMA DE STREAMING

let recomendacoes = ["VideoUm","VideoDois","VideoTres"]
let remocoes = 0; //inicializando

function removerVideo(){
    recomendacoes.pop(); //remove o ultimo video da lista
    remocoes++; // Aumenta a contagem de remoções em 1
    if(remocoes === 3){ // Quando atingir 3
        recomendacoes.push("Novo Video") // adicionar
        remocoes = 0; //remoção é zerada
    }
    console.log("recomendacoes", recomendacoes)
}
removerVideo() removerIndece is not defined
*/

/*
//LISTA DE EVENTOS

let eventos = ["Evento1","Evento3"]
function gerenciarEventos(novoEvento, indice, removerIndice){
    eventos.splice(indice, 0, novoEvento);
    if(removerIndice != undefined) eventos.splice(removerIndece, 1)
    console.log("Eventos", eventos )
}

gerenciarEventos("Evento2", 1)
*/

/*
SPLICE: ADICIONA, REMOVE OU SUBSTITUI ELEMENTO NO ARRAY, ALTERA O ARRAY ORIGINAL,
REMOVENDO OU ADICIONANDO ELEMENTO

INDEXOF: RETORNA A POSIÇÃO DO ELEMENTO NO ARRAY,
PROCURA UM ELEMENTO NO ARRAY E RETORNA O SEU INDICE. sE NÃO ENCONTRAR, RETORNAR -1
*/


/*
//EXEMPLO DE INDEXOF

let cores = ["Azul", "Verde", "Vermelho"];
let indice = cores.indexOf("Verde");
console.log(indice);  // Saída: 1
*/