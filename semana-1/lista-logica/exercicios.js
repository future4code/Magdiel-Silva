// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui

    const altura = Number(prompt("Insira a altura"))
    const largura = Number(prompt("Insira a largura"))
    const area = altura * largura
    console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui

  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoDeNascimento = Number(prompt("Insira o seu ano de nascimento"))
  const idade = anoAtual - anoDeNascimento 
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Insira o seu nome")
  const idade = promp("Insira a sua idade")
  const email = prompt("Insira o seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade}, e o meu email é ${email}`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Insira uma cor")
  const cor2 = prompt("Insira uma cor")
  const cor3 = prompt("Insira uma cor")
  const listaDeCores = [cor1, cor2, cor3]
  console.log(listaDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let frase = prompt("Insira uma frase")
  frase = frase.toUpperCase
  return frase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const quantidadeDeIngressos = custo / valorIngresso
return quantidadeDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let palavra1 = prompt("insira uma palavra")
let palavra2 = prompt("Insira uma palavra")
let compararTamannhoDaPalavra = palavra1.length === palavra2.length
console.log(compararTamannhoDaPalavra)
return 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
console.log(array[0])


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
array = [1, 2, 3]
console.log(array[array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array = [1, 2, 3, 4, 5]
let novoArray = array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const palavraIgual = string1 == string2
  return checaIgualdadeDesconsiderandoCase
}

// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // // EXERCÍCIO 15
// // function checaValidadeInscricaoLabenu() {
// //   // implemente sua lógica aqui
}