import {Request, Response} from "express";
import moment from "moment"
import { insertTask } from "../data/insertTask";

export const createTask = async (req: Request, res: Response) => {

    try {
        // passo 1 - validar entradas da requisição
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limit_date ||
            !req.body.creator_user_id){
                throw new Error("Insira todos os campos necessários!")
            }

            const dateDiff: number = moment(req.body.limit_date, "DD/MM/YYYY").unix() - moment().unix()
            console.log(dateDiff)
            if (dateDiff <= 0) {
                throw new Error("Prazo deve ser uma data futura!")
            }

        // passo 2 - consultar o banco de dados
        const id:string = Date.now() + Math.random().toString();
        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limit_date, "DD/MM/YYYY").format("YYYY-MM-DD"),
            req.body.creator_user_id
        )

        // passo 3 - validar as saídas do banco

        // passo 4 - responser a requisição utilizando ".send" ou ".end"
        res.status(200).send({message:"Tarefa criada com sucesso!", id})

    } catch (error:any) {

        res.status(400).send(error.message || error.sqlMessage)

    }


}