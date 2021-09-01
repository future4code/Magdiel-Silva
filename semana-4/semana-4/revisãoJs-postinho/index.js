
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`
// }
// console.log(checarIgualdade(10, 20))

// // c-)Faça uma função chamada "verificaSeEMaior"
// const verificaSeEMaior = (a , b) => {
//     return `${a} é maior do que ${b}: ${a > b}`
// }

// console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= FALSE
// // b-) 1=='1'= FALSE
// // c-) 'a'==='b'= FALSE
// // d-) 'b'>'a'= TRUE
// // e-) 0!==null= TRUE



// // Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     let usuario = []
//     //  Sua lógica aqui
//     const nomeDoUsuario = prompt("Insira o seu nome completo")
//     const anoDeNascimento = Number(prompt("Insira o seu ano de nascimento"))
//     const senhaDoUsuario = prompt("Insira uma senha com no mínimo 6 caracteres")
//     const nacionalidade = prompt("Insira a sua nacionalidade").toLowerCase()
//     const idadeDoUsuario = 2021 - anoDeNascimento

//     if (idadeDoUsuario >= 18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileira") {
//         usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)
//     } else {
//         console.log("Cadastro não permitido")
//     }
//     return usuario
// }

// console.log(cadastro());

// // // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senhaUsuario = prompt("Insira a sua senha")
//     if (login === senhaUsuario) {
//         console.log("Usuário Logado")
//     } else {
//         console.log("Senha Inválida")
//     }

// }


// // console.log(login());

// // // Exercício 5----------------------------------------------------------------------------------------------------


// const primeiraDose = () => {

//     //  Sua lógica aqui
//     const nomeDoUsuario = prompt("Insira o seu nome")
//     const nomeVacina = prompt("Insira o nome da vacina que tomou: Coronavac, Astrazeneca ou Pfizer?").toLowerCase()
//     let tempo = ""
//     let data = ""

//     if (nomeVacina === "coronavac"){
//         tempo = 28
//         data = "29/09/2021"
//     }  else if (nomeVacina === "astrazeneca" || nomeVacina === "pfizer") {
//         tempo = 90
//         data = "01/12/2021"
//     } 

//     return `Olá ${nomeDoUsuario}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias.
//     compareça no posto na data ${data}`

// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
//     const acheiAPessoaDa2Dose = usuarios.filter((usuario) => {
//         if (usuario.nome === nomeDoUsuario){
//             usuario.imunizacao = "Completa"
//             return usuario
//         }
//     })

//     return acheiAPessoaDa2Dose

// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    const naoImunizados = usuarios.filter((usuario) => {
        if (usuario.imunizacao === "incompleta") {
            return usuario
        }
    })

    const listarPssoasNaoImunizadas = naoImunizados.map((pessoa) => {
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunização}, por favor
    volte ao postinho para tomar a segunda dose`)

    })
    return listarPssoasNaoImunizadas
}

avisoAosAtrasados()


// // DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {

        const nomeDoUsuario = prompt("Insira o seu nome completo")
        const anoDeNascimento = Number(prompt("Insira o seu ano de nascimento"))
        const senhaDoUsuario = prompt("Insira uma senha com no mínimo 6 caracteres")
        const nacionalidade = prompt("Insira a sua nacionalidade").toLowerCase()
        const idadeDoUsuario = 2021 - anoDeNascimento

}
console.log(cadastro());





// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());