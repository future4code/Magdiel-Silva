import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    public createUser = async (user:User) => {
        try {
            await BaseDataBase.connection("cookenu_users")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }

    }
    public findUserByEmail = async (email: string): Promise<User> => {
        try {
         const user = await BaseDataBase.connection("cookenu_users")
         .select("*")
         .where({email})
         return user[0] && User.toUserModel(user[0])
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    public getAllUsers = async():Promise<User[]> => {
       try {
        const users = await BaseDataBase.connection("cookenu_users")
        .select(
            "id",
            "name",
            "email"
        )
        return users.map((user => User.toUserModel(user)))
           
       } catch (error:any) {
        throw new Error(error.message || error.sqlMessage)
       }
    }



}