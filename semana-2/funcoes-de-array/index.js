// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
// Será impresso o array usuários


// EXERCÍCIO 2
// Será impresso o array (novoArrayB) com os nomes:
// Amanda Rangel, Laís Petra, Letícia Chijo.

// EXERCÍCIO 3
// Será impresso o array (novoArrayC) com os apelidos:
// Mandi, Laura




// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// -------------EXERCÍCIO 1--------------

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//A) Crie um novo array que contenha apenas o nome dos doguinhos

function extrairNome(item, index, array) {
    return item.nome
 }
 const nomesDosPets = pets.map(extrairNome)
    console.log(nomesDosPets)

//B) Crie um novo array apenas com os cachorros salsicha

function extrairSalsicha(item, index, array) {
    return item.raca === "Salsicha"
 }
 const petsSalsicha = pets.filter(extrairSalsicha)
    console.log(petsSalsicha)

//C) Crie um novo array que possuirá mensagens para enviar para todos os 
//   clientes que são poodles. A mensagem deve ser: 
//   "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


function extrairPoodles(item, index, array) {
    return item.raca === "Poodle"
 }
let petsPoodle = pets.filter(extrairPoodles)
let poodle1 = petsPoodle[0].nome
let poodle2 = petsPoodle[1].nome 
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", poodle1)
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", poodle2)


// -------------EXERCÍCIO 2 --------------

// Dado o seguinte array de produtos, realize as operações pedidas nos 
// itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//A) Crie um novo array que contenha apenas o nome de cada item

function extrairNome(item, index, array) {
    return item.nome
 }
 const nomeProdutos = produtos.map(extrairNome)
    console.log(nomeProdutos)

//B) Crie um novo array que contenha um objeto 
//   com o nome e o preço de cada item, 
//   aplicando 5% de desconto em todos eles

const novoArray = {
    ...produtos
}
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

function extrairCategoria(item, index, array) {
    return item.categoria
 }
 const nomeCategoria = produtos.map(extrairCategoria)
    console.log(nomeCategoria)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
