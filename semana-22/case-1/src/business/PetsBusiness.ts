import { PetsDataBase } from "../data/PetsDataBase";
import { MissingFields } from "../error/MissingFields";
import { PetsInput, PetsInsert } from "../modal/Pets";
import { IdGenerator } from "../services/IdGenerator";

export class PetsBusiness {
  signUpBusiness = async (input: PetsInput) => {
    if (
        !input.pets || 
        !input.user_id
        ) {
      throw new MissingFields();
    }
  

  const pets: PetsInsert = {
      id: new IdGenerator().generate(),
      ...input,
  }

  const result = await new PetsDataBase().insertPets(pets)

}


}