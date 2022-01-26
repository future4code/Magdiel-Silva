import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInput } from "../modal/User";

export class UserController {
    signUpController = async(req:Request, res: Response) => {
        try {
          const { name, email, data_passeio, duracao, latitude, longitude, horario_inicio, horario_termino } = req.body
          const input:UserInput = {
              name,
              email,
              data_passeio,
              duracao,
              latitude,
              longitude,
              horario_inicio,
              horario_termino
          }  

          const message = await new UserBusiness().signUpBusiness(input)
          res.status(201).send({message})
            
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message:error.message})
            } else {
                res.status(400).json({message:"Erro inesperado!"})
            }
        }
    }

    getAllUsersController = async(req:Request, res:Response) => {
        try {
            const users = await new UserBusiness().getAllUserBusiness()
            res.status(200).json({users})

            
        } catch (error) {
            if(error instanceof Error) {
                res.status(400).json({message:error.message})
            } else {
                res.status(400).json({message: "Erro no sistema!"})
            }
            
        }
    }
}