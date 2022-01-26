import { UserInsert, User } from "../modal/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    private static TABLE_NAME = "dog_walking_user"

    insertUser = async(user:UserInsert):Promise<string> => {
        try {
            await this.getConnection()
            .insert(user)
            .into(UserDataBase.TABLE_NAME)
            return "Usuario e passeio cadastrado com sucesso!"
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }
    }

    getAllUsers = async() => {
        try {
            const result:User[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)

            const users = result.map((user) => {
                return User.userModal(user)
            })
            return users
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }
    }
}