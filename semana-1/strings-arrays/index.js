// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1

/* 
   a. undefined
   b. null 
   c. 11
   d. 3
   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   f. 9
*/

//2

/*
SUBI NUM ÔNIBUS EM MARROCOS, 27
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.
seja bem-vinda(o) ${nomeDoUsuario} !`)

// EXERCÍCIO 2

const comidasFavoritas = ["Pizza de Marquerita", "Nhoque", "Churrasco", "Panqueca", "Hot-Dog"]

// a
 console.log(comidasFavoritas)

// b

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

//c

const qualSuaComidaPreferida = prompt("Qual é a sua comida preferida?")

comidasFavoritas[1]= qualSuaComidaPreferida
console.log(comidasFavoritas)

// EXERCÍCIO 3

//a

let listaDeTarefas = []

//b

const primeiraTarefa = prompt("Insira uma tarefa que precisa ser realizada diariamente")
const segundaTarefa = prompt("Insira outra tarefa que precisa ser realizada diariamente")
const terceiraTarefa = prompt("Insira mais uma tarefa que precisa ser realizada diariameente")

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)


//c

console.log("Lista de Tarefas diárias:", listaDeTarefas)

//d

const tarefaRealizada = Number(prompt("Qual dessas tarefas já foi realizada?: 0, 1 ou 2"))

//e

const listaDeTarefasAtualizada = listaDeTarefas.splice(tarefaRealizada, 1)

//f
console.log("Tarefas que ainda precisam ser realizadas", listaDeTarefasAtualizada)



















