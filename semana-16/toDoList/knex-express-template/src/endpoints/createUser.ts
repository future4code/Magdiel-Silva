import {Request, Response} from "express";
import { insertUser } from "../data/insertUser";

export const createUser = async (req: Request, res: Response) => {

    try {
        // passo 1 - validar entradas da requisição

        if(!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Prencha todos os campos corretamente!")
        }

        // passo 2 - consultar o banco de dados - importante usar o await para consultar o banco
        const id:string = Date.now() + Math.random().toString();

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        // passo 3 - validar as saídas do banco - Nesse exemplo não houve saídas do banco.

        // passo 4 - responser a requisição utilizando ".send" ou ".end"

        res.status(200) .send("Usuário criado com sucesso!")

        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }


}