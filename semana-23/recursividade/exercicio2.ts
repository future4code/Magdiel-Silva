//EXERCICIO 2

// Escreva uma função recursiva que calcule a soma dos números inteiros
// de 0 a n

const calculaSoma = (n:number, soma:number = 0):number|string => {
    if(n === 0){
        return soma
    }
       return calculaSoma(n - 1, soma + n)
    
}
console.log(calculaSoma(10));
  
