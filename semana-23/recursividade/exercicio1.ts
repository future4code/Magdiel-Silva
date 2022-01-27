//EXERCICIO 1 

// escreva uma função recursiva que:

//a) Receba um número e imprima todos os inteiros de 0
//   até esse número no console em ordem crescente. 

const imprimirOrdemCrescente = (n:number):number|string => {
    if(n <= 0){
        return "Insira um número maior que zero"
    }
    if(n > 0){
        imprimirOrdemCrescente(n - 1)
    }
    console.log(n)

}

console.log(imprimirOrdemCrescente(10));

//B) Receba um número e imprima todos os inteiros desse 
//   número até 0 em ordem descrescente. 

const imprimirOrdemDecrescente = (n:number):number | string => {
    if(n <=0){
        return "Insira um número maior que zero"
    }
    if(n > 0){
        console.log(n);
        imprimirOrdemDecrescente(n -1)
    }

}
console.log(imprimirOrdemDecrescente(10));
