// EXERCÍCIO 2
//A) A entrada é o array de números "Numeros" e a saída é "estatísticas"

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([10,50,895652]))

//B) Tem a variável soma que é number; as variáveis maior, menor e média que são do tipo number.

//C)
type AmostraDeIdades ={
    numeros:number[],
    obterEstatisticas: (numeros:number[]) => Estatistica
}

const amostraDeIdades: AmostraDeIdades  = {
    numeros: [10,20,30,40,50],
    obterEstatisticas: (numeros)
}

//Não entendi o exercício. Está dando erro para a execução do node. Arquivo index.js está inalterado.