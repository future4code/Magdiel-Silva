import { validateCharacter } from "../src/exercicio1"
//exercicio2
//a)
test("Should return false for empty name", ()=> {
    const result = validateCharacter({
        name:"",
        life: 1500,
        strength: 300,
        defense: 500
    });
    expect(result).toBe(false)
})
//b)
test("Should return false for 0 life", ()=> {
    const result = validateCharacter({
        name:"Magdiel",
        life: 0,
        strength: 300,
        defense: 500
    });
    expect(result).toBe(false)
})
//c)
test("Should return false for 0 strenght", ()=> {
    const result = validateCharacter({
        name:"Magdiel",
        life: 500,
        strength: 0,
        defense: 500
    });
    expect(result).toBe(false)
})
//d)
test("Should return false for 0 strenght", ()=> {
    const result = validateCharacter({
        name:"Magdiel",
        life: 500,
        strength: 1000,
        defense: 0
    });
    expect(result).toBe(false)
})
//e)
test("Should return false for negative strenght", ()=> {
    const result = validateCharacter({
        name:"Magdiel",
        life: -500,
        strength: 1000,
        defense: 0
    });
    expect(result).toBe(false)
})
//f)
test("Should return true for validate informations", ()=> {
    const result = validateCharacter({
        name:"Magdiel",
        life: 500,
        strength: 1000,
        defense: 0
    });
    expect(result).toBe(true)
})


