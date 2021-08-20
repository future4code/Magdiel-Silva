// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
// O código realiza uma estrutura de repetiçao conhecida como "laço". 
// Foi utilizado nesse código o laço "for". 
// O console vai imprimir os valores de i entre 0 e 4, ou seja: 0, 1, 2, 3, 4

// EXERCÍCIO 2
// A) 19, 21, 23, 25, 27, 30
// B) Sim, colocando o "[i]" junto ao array lista. //MELHORAR A RESPOSTA

// EXERCÍCIO 3
// MELHORAR A RESPOSTA - Ainda não entendi a lógica no enunciado.

// EXERCÍCIO DE ESCRITA DE CÓDIGOS

// EXERCÍCIO 1

// const quantBichos = Number(prompt("Quantos bichinhos de estimação você têm?"))

// if (quantBichos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }

// let i = 0
// const listaDeNomes = []

// while (i < quantBichos){
//     const nomePet = prompt("Qual é o nome dos seus pets? digite um de cada vez!")
//     i++
//     listaDeNomes.push(nomePet)
// }
// console.log(listaDeNomes)

// EXERCÍCIO 2

//A)
arrayOriginal = [1, 2, 5, 7, 10, 13, 17, 19, 20, 29, 31, 37, 41, 43]
function imprimeArray(arr){
    console.log(arr)
}
imprimeArray(arrayOriginal)

//B)

function divideArray(arr){

for (let valor of arr ) {
    console.log(valor/2)
}
}


divideArray(arrayOriginal)

//C)

function parArray(arr){
    let par = []

    for (let valor of arr ) {
       if (valor % 2 === 0) {
           par.push(valor)
       }
    }
console.log(parArray)
}
    
    parArray(arrayOriginal)

//D

