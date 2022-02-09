const procurarNumeroAusente = (entrada:number[]):number => {
    // let somaEsperada = 0 
    // if(entrada){
    //     for(let i = 0; i < entrada.length; i++)
    //     somaEsperada += entrada[i]
    // }
    // console.log(somaEsperada)
    let somaEsperada = 5050
    let soma = 0
    for (const num of entrada){
        soma += num
    }
    return somaEsperada - soma
}

console.log(procurarNumeroAusente([]))