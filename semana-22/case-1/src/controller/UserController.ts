import { Request, Response } from "express";

export class UserController {
    signUpUser = async(req:Request, res: Response) => {
        try {
          const { index, show, create, start_walk, finish_walk } = req.body  
            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}