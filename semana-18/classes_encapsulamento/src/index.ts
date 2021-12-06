import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// EXERCÍCIO 1
//A)
// O construtor é uma função que constrói as instãncias da classe. Chamamos com o 
// new "nomeDaClasse".

//B) Foi empresso uma única vez o "chamando o construtor da classe UserAccount"
//
type Transaction = {
    description: string,
    value: number,
    date: string
  };

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  const myAccount = new UserAccount("42288028858", "Magdiel", 29)
  console.log(myAccount)



// C) Dentro de algum metódo da classe precisamos utilizar o "this"