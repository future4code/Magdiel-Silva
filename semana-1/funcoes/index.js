// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// A) 10 e 50
// B) O resultado não seria impresso. 

// EXERCÍCIO 2

//A) A função procura no texto do usuário a string "cenoura".
//   ela é útil para identificar strings e confere um resultado booleano, true ou false

//B) Todas retornariam True

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 1

//A)

// function imprimirDadosDaPessoa() {
//     console.log("Eu sou Magdiel tenho 28 anos, moro em Carapicuíba e sou estudante")
//  }

// //B)

// function imprimirInformacoes(nome, idade, cidade, profissao) {
//     const resultado = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
//     console.log(resultado) 
//     return resultado
// }

// imprimirInformacoes("Magdiel", "28", "Carapicuíba", "estudante")

//EXERCÍCIO 2

//A)


function soma(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado) 
    return resultado
}
soma(1,100)

//B)

function maiorOuIgual (numero1, numero2) {
    const resultado = numero1 >= numero2
    console.log(resultado)
    return resultado
}

maiorOuIgual(2, 8)

//C)

function eParOuNao(numero){
   let resultado =  numero % 2 === 0
   console.log(resultado)
   return(resultado)
}
 eParOuNao(7)

 //D)

 