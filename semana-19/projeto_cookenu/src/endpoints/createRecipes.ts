import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const resultToken = new Authenticator().getTokenData(token);
    if (!resultToken) {
      res.status(422).send("Token inválido");
    }
    const { titulo, descricao } = req.body;
    if (!titulo || !descricao) {
      res.status(422).send("Insira os dados corretamente!");
    }
    const recipesDataBase = new RecipesDataBase();
    const id = new IdGenerator().generate();
    const data_da_criacao = new Date();
    const newRecipe = new Recipe(id, titulo, descricao, data_da_criacao);
    await recipesDataBase.postRecipes(newRecipe);
    res.status(200).send("Receita cadastrada com sucesso! ");
  } catch (error: any) {
    res.status(400).send(error.message || error.sqlMessage);
  }
};
