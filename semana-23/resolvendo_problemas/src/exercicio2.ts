/* 1) Função que retorne uma compressão de string utilizando a contagem
    de caracteres repetidos em sequencia. Caso o resultado final tenha um
    tamanho maior do que a string inicial, seu programa deve retornar a string inicial.
*/

const stringCompression = (input:string) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input){
        if (char !== lastChar){
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    substrings.push(lastChar + substrings)
    let result = "";
    for (const key of substrings) {
        result += key
    }
    return result.length > input.length? input:result
} 