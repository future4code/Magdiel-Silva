var procurarNumeroAusente = function (entrada) {
    var somaEsperada = 0;
    if (entrada) {
        for (var i = 0; i < entrada.length; i++)
            somaEsperada += entrada[i];
    }
    console.log(somaEsperada);
    var soma = 0;
    for (var _i = 0, entrada_1 = entrada; _i < entrada_1.length; _i++) {
        var num = entrada_1[_i];
        soma += num;
    }
    return somaEsperada - soma;
};
console.log(procurarNumeroAusente([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
