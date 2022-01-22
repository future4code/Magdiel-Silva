import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserInput } from "../modal/User"

export class UserController{
    signUpController = async(req:Request, res:Response) => {
        try {
        const {firstName, lastName, participation} = req.body

        const input: UserInput = {
            firstName,
            lastName,
            participation
        }
        const message = await new UserBusiness().signUpBusiness(input)
        res.status(200).send({message})

        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            } else {
                res.status(400).send({message: "Erro inesperado!"})
            }
        }
    }
    getAllUsers = async(req:Request, res: Response) => {
        try {
            const users = await new UserBusiness().getAllUserBusiness()
            res.status(200).send(users)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message})
            } else {
                res.status(400).send({message: "Erro inesperado!"})
            }
        }
    }
}