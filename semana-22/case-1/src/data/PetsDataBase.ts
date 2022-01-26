import { Pets, PetsInsert } from "../modal/Pets";
import { BaseDataBase } from "./BaseDataBase";

export class PetsDataBase extends BaseDataBase {
    private static TABLE_NAME = "dog_walking_pets"

    insertPets = async(pets:PetsInsert): Promise <string> => {
        try {
            await this.getConnection()
            .insert(pets)
            .into(PetsDataBase.TABLE_NAME)
            return "Pets cadastrados com sucesso!"
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }
    }

    getAllPetsByUserId = async(user_id:string) => {
        try {
            const result:Pets[] = await this.getConnection()
            .select("*")
            .where(user_id)
            .from(PetsDataBase.TABLE_NAME)

            const pets = result.map((pet)=>{
                return Pets.PetsModal(pet)
            })
            return pets
        } catch (error) {
            if(error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro no banco de dados!")
            }
        }
    }
}