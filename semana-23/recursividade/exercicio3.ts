const calculaSoma = (n:number):number => {
    let soma = 0
    for(let i = 0; i <= n; i++){
        soma += i
    }
    return soma 
   
    
}
console.log(calculaSoma(10));