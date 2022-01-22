import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {
  createTable = async () => {
    await this.getconnection().raw(
      `
        CREATE TABLE IF NOT EXISTS usuario_cubo(
        id VARCHAR(255) PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        participation FLOAT
        );
    `
    );
    console.log("Tabela criada com sucesso!")
  };
}

const createTableMigrations = new Migrations()
createTableMigrations.createTable();

