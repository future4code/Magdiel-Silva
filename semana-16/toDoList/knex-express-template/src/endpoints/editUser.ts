import {Request, Response} from "express";
import { updateUser } from "../data/updateUser";

export const editUser = async (req: Request, res: Response):Promise<any>  => {

    try {
        // passo 1 - validar entradas da requisição
        if(
            req.params.id === ""||
            req.body.name === "" ||
            req.body.nickname === ""||
            req.body.email === ""
        ){

            throw new Error("Insira os dados corretamente")
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            throw new Error("Escolha um campo para alterar")

        }

        // passo 2 - consultar o banco de dados

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        // passo 3 - validar as saídas do banco

        // passo 4 - responder a requisição utilizando ".send" ou ".end"

        res.status(200) .send("Usuário atualizado")

        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}