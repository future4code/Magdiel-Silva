// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// -------------EXERCÍCIO 1------------

//A) O código solicita do usuário um número para realizar o teste. 
//   Esse número que é recebido como string é transformado em Number. 
//   Na sequência é realizada uma função, na qual o Resto da divisão 
//   por dois do número insido pelo usuário precisa ser === 0 para
//   passar no teste ou diferente de 0 para não passar.

//B) A função imprime passou para números Pares.
//C) A funhção imprime não passou para números ímpares.

// -------------EXERCÍCIO 2-------------

//A) O código apresenta uma estrutura condicional
//   fundamentada no uso da sintaxe switch case.
//   O obejtivo da pessoa desenvolvedora foi automatizar
//   a relação entre a escolha de determinada fruta com o 
//   seu respectivo custo para compra. 

//B) O preço da fruta maçã é R$ 2.25

//C) O preço da fruta pêra é R$ 5.50

// -------------EXERCÍCIO 3 -------------

//A) A primeira linha apresenta uma constante chamada numero
//   que solicita ao usuário a inserção de um número por meio 
//   do Number(prompt()).  

//B) Se o usuário digitasse 10 seria impresso no console:
//   "Esse número passou no teste"
//   Se o usuário digitasse -10 nada seria impresso no console.


//C) Pois a variável "let mensagem =  "Essa mensagem é secreta!!!"" 
//   está inserida dentro do bloco "if"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// ------------- EXERCÍCIO 1 ------------


// const idadeUsuario = Number(prompt("Insira a sua idade"))
// function possoDirigir (idadeUsuario) {
//     if (idadeUsuario >= 18) {
//         console.log("Você pode dirigir!")
//     } else {
//        console.log("Voçê não pode dirigir") 
//     }
// }

// possoDirigir(idadeUsuario)

// ------------- EXERCÍCIO 2 ------------


// let turnoAluno = prompt("Por favor, em qual turno do dia você estuda? Insira M para Maturino, V para vespertino e N para noturno")
// turnonoAluno = turnoAluno.toLowerCase

// if (turnoAluno === "m") {
//     console.log("Bom dia")
// } else if (turnoAluno ==="v") {
//     console.log("Boa tarde")
// } else if (turnoAluno === "n") {
//     console.log("Boa noite")
// }

// ------------- EXERCÍCIO 3 ------------


// let turnoAluno = prompt("Por favor, em qual turno do dia você estuda? Insira M para Maturino, V para vespertino e N para noturno")
// turnonoAluno = turnoAluno.toLowerCase

// switch (turnoAluno){
//     case "m":
//         console.log("Bom dia")
//         break
//     case "v":
//         console.log("Boa Tarde")
//         break
//     case "n":
//         console.log("Boa noite")
//         break
//     default:
//     console.log("Escolha um pokemon dentre as opções indicadas!")
// }

// ------------- EXERCÍCIO 4 ------------

// let genero = prompt("Qual o gênero do filme que vocês vão assistir?").toLowerCase()
// let ingresso = Number(prompt("Qual é o custo do ingresso?"))

// if(genero === "fantasia" && ingresso <= 15){
//     console.log("Bom Filme")
// } else {
//     console.log("Escolha outro gênero")
// }



// ------------- DESAFIOS ------------

// ------------- DESAFIOS 1 ------------


// let genero = prompt("Qual o gênero do filme que vocês vão assistir?").toLowerCase()
// let ingresso = Number(prompt("Qual é o custo do ingresso?"))

// if(genero === "fantasia" && ingresso <= 15){
//     console.log("Bom Filme")
// } else {
//     console.log("Escolha outro gênero")
// }


// let lanchinho = prompt("Qual lanchinho você querem comprar?")
// console.log("Aproveitem o seu", lanchinho)

// ------------- DESAFIOS 2 ------------

let nomeUsuario = prompt("Insira o seu nome completo").toLowerCase()
let tipoDeJogo = prompt("Informe se o ingresso é para um jogo internacional digitando IN, ou doméstico digitando DO").toLowerCase()
let etapaJogo = prompt("se o jogo é para uma semifinal insira SF, se for para a decisão de terceiro lugar insira DT e para a final insira FL")
let categoria = prompt("Insira qual é a categoria do ingresso: 1, 2, 3 ou 4")
let quantidadeIngressos = Number(prompt("Insira a quantidade de ingressos para a sua compra"))


console.log(nomeUsuario)

switch(tipoDeJogo){
    case"in":
    console.log("Tipo de Jogo: Internacional")
    break
    case "do":
    console.log("Tipo de Jogo: Nacional")
}

switch(etapaJogo){
    case"sf":
    console.log("Etapa do Jogo: Semifinal")
    break
    case "dt":
    console.log("Etapa do Jogo: Decisão do terceiro lugar")
    break
    case "fl":
    console.log("Etapa do Jogo: Decisão da final")
}

switch(categoria){
    case"1":
    console.log("Categoria: 1")
    break
    case "2":
    console.log("Categoria: 2")
    break
    case "3":
    console.log("Categoria: 3")
}

console.log("Quantidade de ingressos:",quantidadeIngressos)

