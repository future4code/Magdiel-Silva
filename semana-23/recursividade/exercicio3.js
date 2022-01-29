var calculaSoma = function (n) {
    var soma = 0;
    for (var i = 0; i <= n; i++) {
        soma += i;
    }
    return soma;
};
console.log(calculaSoma(10));
