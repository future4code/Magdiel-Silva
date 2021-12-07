const listaTarefa = [
    "Arrumar o quarto",
    "Fazer almoço"
]

const novaTarefa = process.argv[2]
listaTarefa.push(novaTarefa)
console.log(listaTarefa) 