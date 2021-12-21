import {Request, Response} from "express"
import { UserDataBase } from "../data/UserDataBase"
import {User} from "../entities/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const singup = async (req: Request, res: Response) => {
    try {
        //validação de entrada
        const {name, email, password, role} = req.body
        if(!name || !email || !password || !role){
            res.status(422).send("Insira os dados corretamente!")
        }

        //Verificação se já existe o cadastro pelo email
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email);
        if(user){
            res.status(409).send("Email já cadastrado!")
        }

        //Gerar o Id
        const id = new IdGenerator().generate()
    
        //Gerar o Hash Password
        const hashPassword = await new HashManager().hash(password);

        //Gerar um novo usuário para cadastro
        const newUser = new User(id, name, email, hashPassword, role)
        await userDataBase.createUser(newUser)
        console.log(newUser)

        //Gerar o token 
        const token = new Authenticator().generate({id, role})
        console.log(token)
        //Enviar a resposta para o frontend

        res.status(200).send({message:"Usuário criado com sucesso!", token})

    } catch (error:any) {
        res.status(400) .send(error.message || error.sqlMessage)
    }
}