//a)
export interface Character {
    name: string,
    life: number,
    strength:number,
    defense:number,
}
// b)
export const validateCharacter = (input:Character): boolean => {
    if(!input.name ||
        input.life === undefined ||
        input.life <= 0 ||
        input.strength === undefined ||
        input.strength <= 0 ||
        input.defense === undefined ||
        input.defense <=0
    ){
        return false
    } else {
        true
    }

}