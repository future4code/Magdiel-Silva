import {Request, Response} from "express";
import { selectUserById } from "../data/selectUserById";

export const getUserById = async (req: Request, res: Response) => {

    try {
        // passo 1 - validar entradas da requisição

        if(!req.params.id){
            throw new Error("Insira o ID!")
        }

        // passo 2 - consultar o banco de dados

        const user = await selectUserById(req.params.id)

        // passo 3 - validar as saídas do banco

        if (!user){
            throw new Error("Usuário não encontrado!")
        }

        // passo 4 - responser a requisição utilizando ".send" ou ".end"

        res.status(200) .send({ 
            id: user.id,
            nickname: user.nickname}
        )
        
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }


}