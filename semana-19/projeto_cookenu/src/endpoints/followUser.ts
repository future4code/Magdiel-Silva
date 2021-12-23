import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export const followUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const resultToken = new Authenticator().getTokenData(token);
    if (!resultToken) {
      res.status(422).send("Token inválido");
    }
    const {userToFollowId} = req.params
    if(!userToFollowId){
        res.status(422).send("Insira um ID para seguir")
    }
    const users = await new UserDataBase().findUserById(userToFollowId)
    if(!users){
         res.status(409).send("Não existe esse ID de usuário cadastrado!")
     }
    // const myId = new UserDataBase().getUser(resultToken.id)
    // ainda não conseguir pegar o meu próprio ID.

  } catch (error: any) {
    res.status(400).send(error.message || error.sqlMessage);
  }
};
