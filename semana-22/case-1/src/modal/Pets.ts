export class Pets {
    constructor(
        private id: string,
        private pets: string[],
        private user_id:string
    ){}

    static PetsModal (pets:Pets){
        return new Pets(
            pets.id,
            pets.pets,
            pets.user_id
        )
    }
}

export interface PetsInput {
    pets: string[],
    user_id:string
}

export interface PetsInsert extends PetsInput {
    id:string
}