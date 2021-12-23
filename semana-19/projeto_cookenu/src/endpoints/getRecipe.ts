import { Request, Response } from "express"
import { RecipesDataBase } from "../data/RecipesDataBase"
import { Authenticator } from "../services/Authenticator"

export const getRecipe = async (req:Request, res: Response) => {
    try {
        //validar a entrada do token
        const token = req.headers.authorization as string
        const resultToken = new Authenticator().getTokenData(token)
        if(!resultToken){
            res.status(422).send("Token inválido")
        }
        //validar a entrada do ID
        const {id} = req.params
        if(!id){
            res.status(422).send("Insira um ID")
        }
        //Verificação se o id existe no banco de dados
        const recipes = await new RecipesDataBase().findRecipeById(id)
        if(!recipes){
            res.status(409).send("Não existe esse ID de receitas cadastrado!")
        }

        const recipe = await new RecipesDataBase().getRecipeById(id)
        res.status(200).send(recipe)
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}