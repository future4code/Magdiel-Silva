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
    public findRecipeById = async (id: string): Promise<Recipe> => {
        try {
         const recipe = await BaseDataBase.connection("cookenu_recipes")
         .select("*")
         .where({id})
         return recipe[0] && Recipe.toRecipeModel(recipe[0])
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
    public getRecipeById = async(id:string):Promise<Recipe[]> => {
        try {
         const recipe = await BaseDataBase.connection("cookenu_recipes")
         .select("*")
         .where({id})
 
         return recipe.map((recipe => Recipe.toRecipeModel(recipe)))
            
        } catch (error:any) {
         throw new Error(error.message || error.sqlMessage)
        }
     }
}