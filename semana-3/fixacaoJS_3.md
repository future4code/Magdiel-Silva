```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notaProva1 = p1 * 2
  let notaProva2 = p2 * 3
  let notaExercicio = ex * 1
  let media = (notaProva1 + notaProva2 + notaExercicio) / 6
  
  if (media < 6) {
    return "D"
  } else if(media >= 6 && media < 7.5 ) {
     return "C"
  } else if (media >= 7 && media < 9) {
     return "D"
  } else {
     return "A"
  }```