import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserInput } from "../modal/User"

export class UserController{
    signUpController = async(req:Request, res:Response) => {
        const {firstName, lastName, participation} = req.body

        const input: UserInput = {
            firstName,
            lastName,
            participation
        }
        const message = await new UserBusiness().signUpBusiness(input)
        res.status(200).send({message})

    }
}