import { BaseDataBase } from "./BaseDataBase"

class Migrations extends BaseDataBase {
 
    createTables = async() => {
        await this.getConnection()
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
        );
        console.log("Tabela criada com sucesso!");
    };

    destroyConnection = async() => {
       await this.destroyConnection()
    }

}


const createTableMigrations = new Migrations()
createTableMigrations.createTables()
.finally();
///PERGUNTA PARA O PLANTÃO > COMO ARRUMAR O DESTROY CONNECTION E PARA O TS-NODE-DEV


