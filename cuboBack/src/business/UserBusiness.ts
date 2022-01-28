import { UserData } from "../data/UserData"
import { MissingFiels } from "../error/MissingFields"
import { UserInput, UserInsert } from "../modal/User"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness{
    signUpBusiness = async(input:UserInput) => {
        if(input.participation === 0) {
            throw new Error("participation can't zero")
        }
        if(!input.firstName || !input.lastName || !input.participation){
            throw new MissingFiels()
        }
        const user:UserInsert = {
            id: new IdGenerator().generate(),
            ...input
        }
        const result = await new UserData().insertUser(user)
        return result
    }
    getAllUserBusiness = async() => {
        const result = await new UserData().getAllUser()
        return result
    }
}