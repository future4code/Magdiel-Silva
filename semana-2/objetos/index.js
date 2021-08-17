// EXERCÍCIOS DE LEITURA DE CÓDIGO

// 1

//A) 
//   Matheus Nachtergaele
//   Virginia Cavendish
//   canal:Globo, horário: 14h

// 2

// A) 
//    Juca, 3, SRD
//    Juba, 3, SRD
//    Jubo, 3, SRD

// B)
// As reticências "..." são utilizadas 
// para realizar o espalhamento ou spreed. 
// Esse recurso copia um objeto ou parte deste
// para ser utilizada em outro objeto.

// 3

// A) 
// False
// Undefined

//B)
// A função está invocando a propriedade
// backender do objeto, trazendo como valor o boolenao false.

//B) A função não invocou a propriedade "altura" pois ela não
// foi encontrada no objeto, retornando undefined.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// --------------------EXERCÍCIO 1------------

// A)

const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]

}

function nomePessoa(dados) {
    const frase =`Eu sou ${dados.nome}, mas pode me chame de: ${dados.apelidos[0]}, 
    ${dados.apelidos[1]} ou ${dados.apelidos [2]}`
    console.log(frase)

}

// B)

const pessoaB = {
    ...pessoa,
    apelidos:["Picaku", "Goku", "Bob Esponja"]
}
function nomePessoa(dados) {
    const fraseB =`Eu sou ${dados.nome}, mas pode me chame de: ${dados.apelidos[0]}, 
    ${dados.apelidos[1]} ou ${dados.apelidos [2]}`
    console.log(fraseB)
}
nomePessoa(pessoa)
nomePessoa(pessoaB)





// --------------EXERCÍCIO 2------------

// // A)

const pessoa1 = {
    nome: "Marcos",
    idade: 28,
    profissão: "Professor"
}

const pessoa2 = {
    nome: "Maria",
    idade: 26,
    profissão: "Cozinheira"

}

// B)

function minhaFuncao(array) {
    const fraseC = [array.nome, array.nome.length, array.idade, array.profissão, array.profissão.length]
    console.log(fraseC)
}
minhaFuncao(pessoa1)
minhaFuncao(pessoa2)


//3)

//A)
 const carrinho = []
 // B)
 const fruta1 = {
     nome: "morango",
     disponibilidade: true
 }
 const fruta2 = {
     nome: "abacaxi",
     disponibilidade: true
 }
 const fruta3 = {
     nome: "melão",
     disponibilidade: true
 }
  // C)
  function funcaoFrutas(fruta) {
      carrinho.push(fruta)
      return carrinho
  }

  funcaoFrutas(fruta1)
  funcaoFrutas(fruta2)
  funcaoFrutas(fruta3)
  // D)
  console.log(carrinho)





// DESAFIO

//1

const nomeUsuario = prompt("Insira o seu nome")
const idadeUsuario = Number(prompt("Insira a sua idade"))
const profissaoUsuario = prompt("Insira a sua profissão")

function perguntas(dados) {
    const nomeUsuario = prompt("Insira o seu nome")
    const idadeUsuario = Number(prompt("Insira a sua idade"))
    const profissaoUsuario = prompt("Insira a sua profissão")
    const dados = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        Profissão: profissaoUsuario
    }
}
console.log(dados)    