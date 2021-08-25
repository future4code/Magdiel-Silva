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
const carta = comprarCarta()
if(confirm("Quer iniciar uma nova rodada?")){

   let cartaUsuario = comprarCarta()
   let cartaComputador = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador2 = comprarCarta()
   let somaUsuarioCarta = cartaUsuario.valor+cartaUsuario2.valor
   let somaComputadorCarta = cartaComputador.valor+cartaComputador2.valor

   console.log("Usuário - cartas", cartaUsuario.texto+cartaUsuario2.texto,"pontuação", somaUsuarioCarta)
   console.log("Computador - cartas", cartaComputador.texto+cartaComputador2.texto,"pontuação", somaComputadorCarta)

      if (somaUsuarioCarta > somaComputadorCarta) {
         console.log("Usuário Venceu!")
       } else if (somaComputadorCarta > somaUsuarioCarta) {
         console.log("Computador Venceu!")
       } else {
         console.log("Deu empate!") }
   } else {
   console.log("O jogo acabou")
}




