
const printError = (error:any) => {
    console.log(error.sqlMessage || error.message)
}

const createTables = async() => {
    await BaseDataBase
    .raw(
        `
        CREATE TABLE IF NOT EXISTS dog_walking(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            status VARCHAR(255) NOT NULL,
            agendamento VARCHAR(255) NOT NULL,
            preco VARCHAR(255) NOT NULL,
            duracao VARCHAR(255) NOT NULL,
            latitude VARCHAR(255) NOT NULL,
            longitude VARCHAR(255) NOT NULL,
            pets VARCHAR(255) NOT NULL,
            horario_inicio VARCHAR(255) NOT NULL,
            horario_termino VARCHAR(255) NOT NULL
        );
        `
    )
    .then(()=>{
        console.log("Tabelas criadas com sucesso!")
    })
    .catch(printError)
}
const closeConnection = () => {
    BaseDataBase.destroy()
}
createTables()
.finally(closeConnection)