// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    retornaPares = array.filter((numero) => numero % 2 === 0)
    return retornaPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let retornaPares = array.filter((numero) => numero % 2 === 0)
    for(let i = 0; i < retornaPares.length; i++){
        retornaPares[i] = retornaPares[i] * retornaPares[i]
    }
    return retornaPares
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maior = -Infinity
  while (i < array.length) {
      if (array[i] > maior){
          maior = array[i]  
      }
    i = i+1
  } 
  return maior
}
    
// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {

//     AINDA NÃO CONSEGUI ENCONTRAR UMA LÓGICA
//         const objeto = {
//         maiorNumero: 0,
//         maiorDivisivelPorMenor: 0,
//         diferenca = 0
    
//     }
//     if (num1 > num2){
//         return `maiorNumero: ${num1}`
//  } else ( num2 > num1)
//  {
//         return `maiorNumero: ${num2}`
//     } 
// }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   // AINDA NÃO CONSEGUI ENCONTRAR UMA LÓGICA
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB === ladoC) {
        return "equilátero"
    } else if (ladoA !== ladoB !== ladoC) {
        return "retângula ou escaleno"
    } else {
        return "isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `venha assistir ao filme ${filme.nome}, de ${filme.ano},
    dirigido por ${filme.diretor} e estrelado por ${filme.atores} `
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto = {
       ...pessoa,
       nome: "Anônimo"
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}