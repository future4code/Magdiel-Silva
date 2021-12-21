import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export const login = async (req:Request, res:Response) => {
    try {
        // validação de entrada
        const {email, password} = req.body
        if(!email || !password){
            res.status(422).send("Insira os dados corretamente!")
        }
        //Verificação se o usuário existe no banco de dados
        const user = await new UserDataBase().findUserByEmail(email)
        if(!user){
            res.status(409).send("Não existe esse usuário cadastrado!")
        }
        //Verificar se a senha digitada está correta de acordo com a senha cadastrada no banco de dados
        const passwordIsCorrect = await new HashManager().compare(password, user.getPassword())
        if(!passwordIsCorrect){
            res.status(401).send("Email ou senha incorretos!")
        }
        //Gerar o token
        const token = new Authenticator().generate({id:user.getId(), role:user.getRole()})
        // enviar resposta para o front
        res.status(200).send({message:"Usuário logado com sucesso!", token})
    } catch (error:any) {
        res.status(400) .send(error.message || error.sqlMessage)
    }
}