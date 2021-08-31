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
  const usuarioAltura = Number(prompt("Insira a altura do retangulo"))
  const usuarioLargura = Number(pronpt("Insira a largura do retangulo"))
  const calculaAreaRetangulo = usuarioAltura * usuarioLargura

  console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira o seu ano de nascimento"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Insira o seu nome")
  const idade = Number(prompt("Insira a sua idade"))
  const email = prompt("Insira o seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  let coresFavoritas = []
  const cor1 = prompt("Insira a sua primeira cor favorita")
  const cor2 = prompt("Insira a sua segunda cor favorita")
  const cor3 = prompt("Insira a sua terceira cor favorita")
  coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let retornaStringEmMaiuscula = string.toUpperCase()
  return retornaStringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
     
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const auxiliar = array[array.length-1]
  array[array.length-1] = array[0]
  array[0] = auxiliar
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira o seu ano de nascimento"))
  const anoCarteiraIdentidade = Number(prompt("Insira o ano de emissão da sua carteira de identidade"))
  const idade = anoAtual-anoNascimento
  const tempoEmissao = anoAtual-anoCarteiraIdentidade
  if (idade <= 20 && tempoEmissao >= 5) {
    console.log(true)
  } else if (idade > 20 && idade <= 50 && tempoEmissao >= 10){
    console.log(true)
  } else if (idade > 50 && tempoEmissao >= 15) {
    console.log(true)
  } else {
    console.log(false)
  }
  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0){
    return true
  } else if (ano % 4 === 0 && !(ano % 100 === 0)){
    return true
  } else {
    return false
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos? S/N").toLowerCase()
  const temEnsinoMedio = prompt("Você tem o Ensino Médio Completo? S/N").toLowerCase()
  const horarioCurso = prompt("Você tem disponibilidade para o horário do curso? S/N").toLowerCase()

  if(maiorDeIdade === "sim" && temEnsinoMedio ==="sim" && horarioCurso ==="sim"){
    console.log(true)
  } else {
    console.log(false)
  }
 
  }
    
