import { compare, hash } from "../services/hashManager";
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { userInput, login, user } from "../types/user"
import { selectUserByEmail } from "../data/selectUserByEmail";

export class UserBusiness {
    
     singUpBusiness = async (user:userInput): Promise<string> => {
        const {name, email, password, role} = user
        if(!name || !email || !password || !role){
            throw new Error("Preencha os campos corretamente!")
        }

        const id:string = generateId()

        const hashPassword = await hash(user.password)

        await insertUser({
            id,
            name,
            email,
            password: hashPassword,
            role
        })

        const token: string = generateToken({
            id,
            role:user.role
        })

        return token
    }

    loginBussines = async (login:login): Promise<string> => {
        if(!login.email || !login.password){
            throw new Error("Insira os dados corretamente!")
        }
        const user:user = await selectUserByEmail(login.email)
        if(!user){
            throw new Error("Usuário nao encontrado!")
        }
        const passwordIsCorrect: boolean = await compare(login.password, user.password)
        if(!passwordIsCorrect){
            throw new Error ("Usuário não encontrado ou senha incorreta!")
        }

        const token: string = generateToken({
            id: user.id,
            role:user.role
        })
        return token
    }
}