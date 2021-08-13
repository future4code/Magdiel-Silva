/* 
   EXERCÍCIO DE LEITURA 1 

   const bool1 = true
   const bool2 = false
   const bool3 = !bool2
   
   let resultado = bool1 && bool2
   console.log("a.", resultado)
   RESULTADO DO CONSOLE = a. false

   resultado = bool1 && bool2 && bool3
   console.log("b.", resultado)
   RESULTADO DO CONSOLE = b. false
   
   resultado = !resultado && (bool1 || bool2)
   console.log("c.", resultado)
   RESULTADO DO CONSOLE = c. true
   
   console.log("d.", typeof resultado)
   RESULTADO DO CONSOLE = d. boolean


   EXERCÍCIO DE LEITURA 2

   Let primeiroNumero = prompt("Digite um numero!")
   let segundoNumero = prompt("Digite outro numero!")
   const soma = primeiroNumero + segundoNumero
   console.log(soma)

   RESULTADO DO CONSOLE = Haverá a concatenação do primeiro e 
   do segundo número E NÃO A SOMA.

   EXERCÍCIO DE LEITURA 3

   Faltou adicionar o 
   Number(prompt("Digite um numero!")) 
   e o Number(prompt("Digite outro numero!")) 
   
   */

   /* EXERCÍCIO DE ESCRITA 1 */

const idadeUsuario = Number(prompt("Qual é a sua idade?"))
const idadeDoAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou amiga?"))

let resultado = idadeUsuario > idadeDoAmigo
console.log("Sua idade é maior do que a do seu amigo?", resultado)

resultado = idadeUsuario - idadeDoAmigo
console.log("A diferença entre a idade de vocês é de", resultado)

   /* EXERCÍCIO DE ESCRITA 2 */

let numeroPar = Number(prompt("Insira um número par"))
console.log(numeroPar % 2)
/* 

Todo resultado que aparece no console é 0. Esse resultado aparece pois
todo número par dividido por 2 não apresenta resto. 
Se o usuário digitar um número ímpar aparecerá como sobra 1 

*/

   /* EXERCÍCIO DE ESCRITA 3 */

let idade = Number(prompt("Qual é a sua idade em anos?"))
let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idadeDias * 24

console.log("A sua idade em meses é:", idadeMeses,)
console.log("A sua idade em dias é:", idadeDias)
console.log("A sua idade em horas é:", idadeHoras)

   /* EXERCÍCIO DE ESCRITA 4 */

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))
let resultado
resultado = primeiroNumero > segundoNumero
console.log("O primeiro número é maior do que o segundo?", resultado)

resultado = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo?", resultado)

let restoDaDivisão
restoDaDivisão = primeiroNumero % segundoNumero
restoDaDivisão = restoDaDivisão === 0
console.log("O primeiro número é divisível pelo segundo?", restoDaDivisão)

restoDaDivisão = segundoNumero % primeiroNumero
restoDaDivisão = restoDaDivisão === 0
console.log("O segundo número é divisível pelo primeiro?", restoDaDivisão)

   /* DESAFIO 1 */

// A

let kelvin
let fahrenheit = 77
let celsius 

kelvin = (fahrenheit - 32) * (5 / 9) + 273.15
console.log("77º fahrenheit em kelvin é:", kelvin, "°K")

// B

celsius = 80

fahrenheit = (celsius * 9 / 5) + 32

console.log("80º celsius em fahrenheit é:", fahrenheit, "°F")

// C

celsius = 30
fahrenheit = (celsius * 9 / 5) + 32
kelvin = (fahrenheit - 32) * (5 / 9) + 273.15

console.log("30º celsius em fahrenheit é:", fahrenheit, "°F")
console.log("30º celsius em kelvin é:", kelvin, "°K")

// D

celsius = Number(prompt("Insira um valor em graus celsius"))
fahrenheit = (celsius * 9 / 5) + 32
kelvin = (fahrenheit - 32) * (5 / 9) + 273.15

console.log(celsius, "celsius em fahrenheit é:", fahrenheit, "°F")
console.log(celsius, "celsius em kelvin é:", kelvin, "k")

/* DESAFIO 2 */

let precoKw = 0.05
let consumoKw = 280
let custo
custo = precoKw * consumoKw
console.log("O custo da sua conta de energia é:", custo, "reais")

let desconto = custo * (15/100)
let descontoNaConta = custo - desconto
console.log("O custo da sua conta de energia com o desconto de 15 % é:", descontoNaConta, "reais")

/* DESAFIO 3 */

// A

let quilograma
let libra = 20
quilograma = (libra / 2.2046)
console.log("20lb equivalem a", quilograma, "kg")

// B

let oncas = 10.5
quilograma = (oncas / 35.274)
console.log("10.5oz equivalem a", quilograma, "kg")

// C

let milhas = 100
let metro
metro = (milhas / 0.00062137)
console.log("100mi equivalem a", metro, "mt")

// D

let pes = 50
metro = (pes / 3.2808)
console.log("50ft equivalem a", metro, "mt")

// E

let galao = 103.56
let litro
litro = (galao / 0.21997)
console.log("103.50UK gal (usei o padrão britânico líquido) equivalem a", litro, "L")

// F

let xicara = 450
litro = (xicara * 6) / 25
console.log("450 xic equivalem a", litro, "L")

// G

xicara = Number(prompt("Insira a quantidade de xícaras que gostaria de converter para litros"))
litro = (xicara * 6) / 25
console.log(xicara, "xic equivalem a", litro, "l")













