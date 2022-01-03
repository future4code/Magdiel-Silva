import {Request, Response} from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

     signUpController = async (req: Request, res: Response) => {
         try {
             const {name, email, password, role} = req.body
             const token = await new UserBusiness().singUpBusiness({name, email, password, role})

             res.status(201).send(token)
             
         } catch (error:any) {
             res.status(400).send(error.message || error.sqlMessage)
         }
    }
}