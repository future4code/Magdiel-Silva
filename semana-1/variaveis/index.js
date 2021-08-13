/* EXERCÍCIO - 1
let a = 10
let b = 10
console.log(b)
resultado = 10

b = 5
console.log(a, b)
resultado = 10, 5

EXERCÍCIO - 2
let a = 10
let b = 20
c = a 
b = c 
a = b 
console.log(a, b, c)
resultado = 10, 10, 10 

EXERCÍCIO 3
let horasDiariasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
alert("Você recebe ${salarioDiario/horasDiariasDeTrabalho} por hora")

EXERCÍCIOS DE ESCRITA DE CÓDIGO
1 */

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

/* Como esperado, foi impresso no console do navegador "undefined" e "undefined".
Como não temos um valor atribuído o resultado necessariamente deveria ser "undefined. 
Essa situação apenas seria alterada com a atribuição de um novo valor à declaração, visto que usamos
"let" e não "const" */

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome)
console.log(typeof idade)

/* Com os novos valores à "nome" e "idade" foram impressas no console do navegador "string" e "string",
visto que foram digitadas como resposta "Magdiel" e "28" */
console.log("Olá", nome, "você tem", idade, "anos")

/* 2 */

let voceEstaUsandoUmaRoupaAzulHoje = true
voceEstaUsandoUmaRoupaAzulHoje = false
voceEstaUsandoUmaRoupaAzulHoje = prompt("Você está usando alguma roupa azul hoje?")
console.log ("Você está usando alguma roupa azul hoje? -", voceEstaUsandoUmaRoupaAzulHoje)

let voceNasceuNoEstadoDeSaoPaulo = true
voceNasceuNoEstadoDeSaoPaulo = false
voceNasceuNoEstadoDeSaoPaulo = prompt("Você nasceu no Estado de São Paulo?")
console.log ("Você nasceu no Estado de São Paulo? -", voceNasceuNoEstadoDeSaoPaulo)

let voceEhMaiorDeIdade = true
voceEhMaiordeIdade = false
voceEhMaiorDeIdade = prompt("Você é maior de idade?")
console.log ("Você é maior de idade? -", voceEhMaiorDeIdade)

/* 3 */

let a = 10
let b = 25
let c = b - a

a = b
b = a - c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

 


























