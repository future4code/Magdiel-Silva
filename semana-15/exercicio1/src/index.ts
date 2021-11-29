// EXERCÍCIO 1
// A)
let minhaString:string = "Magdiel"
// minhaString = 8
// minhaString é uma variável declarada como string, por essa razão
// encontramos um erro quando atribuimos o number 8

//B)
// podemos adicionar o pipe para tornar a variável number ou string
let meuNumero:number | string = "dez"

//C)


enum CorFavorita {
    COR1 = "Amarelo",
    COR2 = "Azul",
    COR3 = "Verde"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}
const maria:Pessoa = {
    nome: "Maria",
    idade: 35,
    corFavorita:CorFavorita.COR1
}

const alberto:Pessoa = {
    nome: "Alberto",
    idade: 29,
    corFavorita:CorFavorita.COR2
}

const ana:Pessoa = {
    nome: "Ana",
    idade: 50,
    corFavorita:CorFavorita.COR3
}