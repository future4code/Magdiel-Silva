// EXERCICIO 4

// escreva uma função recursiva que consiga imprimir todos os elementos de um array

const imprimirArray = (array: number[], i: number = array.length - 1) => {
    if(i >= 0){
        imprimirArray(array, i -1)
        console.log(array[i])
    }
}
const lista= [1, 2, 3, 4];
imprimirArray(lista);