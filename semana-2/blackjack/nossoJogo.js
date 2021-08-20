/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo BlackJack!")

if(confirm("Quer iniciar uma nova rodada?")){

} else {
   console.log("O jogo acabou")
}

let usuario = comprarCarta()
let computador = comprarCarta()

const carta = comprarCarta()

  console.log("Usuario", carta.texto)
   console.log("Computador", carta.texto)