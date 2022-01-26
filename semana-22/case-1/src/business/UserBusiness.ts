import { UserDataBase } from "../data/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import { UserInput, UserInsert } from "../modal/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    signUpBusiness = async(input: UserInput) => {
        if(!input.name || 
            !input.email || 
            !input.data_passeio ||
            !input.duracao ||
            !input.latitude ||
            !input.longitude ||
            !input.horario_inicio ||
            !input.horario_termino
            ){
                throw new MissingFields()
            }

        if((input.horario_termino - input.horario_inicio) !== 30 || 
            (input.horario_termino - input.horario_inicio) !== 60) {
            throw new Error("Insira um horario com intervalo de 30 ou 60 minutos")
        }

        const user:UserInsert = {
            id: new IdGenerator().generate(),
            ...input
        }

        const result = await new UserDataBase().insertUser(user)
        return result
    }

    getAllUserBusiness = async() => {
        const result = await new UserDataBase().getAllUsers()
        return result
    }

}