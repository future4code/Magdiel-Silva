import { Knex } from "knex";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase{

    protected static connection:Knex = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
        },
    })
}