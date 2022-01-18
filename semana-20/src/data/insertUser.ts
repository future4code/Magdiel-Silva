import { connection } from "../connection";
import { user } from "../types/user";

export const insertUser = async(user: user) => {
   const {id, name, email, password, role} = user

   await connection.insert({
      id,
      name,
      email,
      password,
      role,
   }).into("aula58_users")
}