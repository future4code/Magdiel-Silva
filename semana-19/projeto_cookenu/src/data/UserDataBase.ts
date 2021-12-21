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

}