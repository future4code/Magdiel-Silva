//EXERCICIO 2
// Escreva uma função recursiva que calcule a soma dos números inteiros
// de 0 a n
var calculaSoma = function (n, soma) {
    if (n === 0) {
        return soma;
    }
    return calculaSoma(n - 1, soma + n);
};
console.log(calculaSoma(3, 0));
