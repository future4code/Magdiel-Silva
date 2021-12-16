import { BaseDataBase } from "./BaseDataBase";


export class UserDataBase extends BaseDataBase{

    public getUserById = async (id:string) => {
       const result =  await this.connection("Aula48_users")
        .where({id})
        return result[0]
    }

    public createUser = async ()=>[
        await this.connection("Aula48_users")
    ]
    
}