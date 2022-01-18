import { Character, validateCharacter } from "./exercicio1";
//a)
export const performAttack = (attacker: Character, defender: Character)=>{
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid character")
    };

    if(attacker.strength > defender.defense) {
        const difference = attacker.strength - defender.defense
        defender.life -= difference 
    }
}
//b)
export const performAttackInjected = (attacker:Character, defender:Character, validator:(input:Character) => boolean) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid character")
    };
    if(attacker.strength > defender.defense) {
        const difference = attacker.strength - defender.defense
        defender.life -= difference 
    }
}
//c) o parâmetro validator realiza uma inversão de dependência na função  performAttackInjected


