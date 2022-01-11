import {performPurhase, User} from "../src/exercicio1";

//a)
test("saldo maior que o valor da compra", () => {
    const user:User ={
        name:"Jaqueline",
        balance:200
    }
    const result = performPurhase(user, 40)
    
    expect(result).toEqual({
        name:"Jaqueline",
        balance:160
    })
})

//b)
test("saldo igual ao valor da compra", ()=> {
    const user:User = {
        name:"josefina",
        balance:100
    }
    const result = performPurhase(user, 100)

    expect(result).toEqual({
        name:"josefina",
        balance:0
    })
})

//c)
test("saldo menor que o valor da compra", ()=> {
    const user:User = {
        name:"josefina",
        balance:100
    }
    const result = performPurhase(user, 150)
    expect(result).not.toBeDefined()
})