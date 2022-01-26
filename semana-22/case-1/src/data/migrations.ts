import { BaseDataBase } from "./BaseDataBase"

class Migrations extends BaseDataBase {
 
    createTables = async() => {
        await this.getConnection()
        .raw(
        `
        CREATE TABLE IF NOT EXISTS dog_walking_user(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            data_passeio VARCHAR(255) NOT NULL,
            latitude VARCHAR(255) NOT NULL,
            longitude VARCHAR(255) NOT NULL,
            horario_inicio VARCHAR(255) NOT NULL,
            horario_termino VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS dog_walking_pets(
            id VARCHAR(255) PRIMARY KEY,
            pets VARCHAR(255) NOT NULL,
            user_id VARCHAR(255)  NOT NULL,
            FOREIGN KEY (user_id) REFERENCES dog_walking_user(id)
        );

        CREATE TABLE IF NOT EXISTS dog_walking_data(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            pets_id VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
            duracao VARCHAR(255) NOT NULL,
            preco VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES dog_walking_user(id),
            FOREIGN KEY (pets_id) REFERENCES dog_walking_pets(id)
        );
        `
        );
        console.log("Tabelas criadas com sucesso!");
    };

    destroyConnection = async() => {
       await this.destroyConnection()
    }

}


const createTableMigrations = new Migrations()
createTableMigrations.createTables()
// .finally();
///PERGUNTA PARA O PLANTÃO > COMO ARRUMAR O DESTROY CONNECTION E PARA O TS-NODE-DEV


