/* 1) Realizar três operações com as strings: adicionar caractere ao final, 
    remover um caractere do final, substituir um caractere por outro.

*/
const stringA = "banana"
const stringB = "bananu"
const isOneEdit = (stringA:string, stringB: string): boolean => {
    if(Math.abs(stringB.length - stringA.length) > 1){
        return false
    }
    if (stringA.length > stringB.length){
        return stringA.includes(stringB)
    }
    if(stringB.length > stringA.length){
        return stringB.includes(stringA)
    }

    let charsDiffCount = 0
    for (let i = 0; i < stringA.length; i++){
        if (stringA[i] !== stringB[i]){
            charsDiffCount++
        }
    }
    return charsDiffCount === 1
}