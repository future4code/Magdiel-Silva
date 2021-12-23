import { Recipe } from "../entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipesDataBase extends BaseDataBase {
    public postRecipes = async (recipe:Recipe) => {
        try {
            await BaseDataBase.connection("cookenu_recipes")
            .insert({
                id: recipe.getId(),
                titulo: recipe.getTituto(),
                descricao: recipe.getDescricao(),
                data_de_criacao: recipe.getData()
            })
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}