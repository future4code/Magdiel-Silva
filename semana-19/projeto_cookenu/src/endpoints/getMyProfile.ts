import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"

export const getMyProfile = async (req:Request, res:Response) => {

    try {
        //validar a entrada do token e email
        const token = req.headers.authorization as any
        const resultToken = new Authenticator().getTokenData(token)

        if(!resultToken){
            res.status(422).send("Token inválido")
        }
        const user = await new UserDataBase().getUser(resultToken)
        res.status(200).send(user)

    } catch (error:any) {
        res.status(400) .send(error.message || error.sqlMessage)

    }
    
}