import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"


export const getOtherProfile = async (req:Request, res: Response) => {
    try {
        //validar a entrada do token
        const {id} = req.params
        const token = req.headers.authorization as string
        const resultToken = new Authenticator().getTokenData(token)
        if(!resultToken){
            res.status(422).send("Token inválido")
        }

        //Validar entrada do ID

        if(!id){
            res.status(422).send("Insira um ID")
        }
        //Verificação se o id existe no banco de dados
        const user1 = await new UserDataBase().findUserById(id)
        if(!user1){
             res.status(409).send("Não existe esse ID de usuário cadastrado!")
         }

        const user = await new UserDataBase().getUserById(id)
        res.status(200).send(user)


    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)

    }

}