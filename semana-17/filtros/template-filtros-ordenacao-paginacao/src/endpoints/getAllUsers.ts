import { Request, Response } from "express"
import { connection } from "../data/connection"

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const users = await selectAllUsers()

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No users found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// };

// EXERCÍCIO 1

//A)

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      
      const title = req.query.title || "%"
      const result = await connection("aula49_exercicio")
      .where("title", "LIKE", `%${title}`)

      const userName = result.map(toUser)
      res.status(200).send(userName)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
};

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
   `)

   return result[0]
}

//B)


