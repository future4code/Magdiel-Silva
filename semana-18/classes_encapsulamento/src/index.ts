import { threadId } from "worker_threads"
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

type transaction = {
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

    getCpf = (): string => {
      return this.cpf
    };

    getName = (): string => {
      return this.name
    };

    getAge = (): number => {
      return this.age
    };

    getBalance = ():number => {
      return this.balance
    };

    getTransactions = ():Transaction[] => {
      return this.transactions
    }

    setTransactions = (newTransaction:Transaction):void => {
      this.transactions.push(newTransaction)
    }

}

  const myAccount = new UserAccount("42288028858", "Magdiel", 29)
  console.log(myAccount)



// C) Dentro de algum metódo da classe precisamos utilizar o "this"

// EXERCÍCIO 2

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  getDate = ():string => {
    return this.date
  };

  getValue = ():number => {
    return this.value
  }

  getDescription = (): string => {
    return this.description
  }
}

const pagamento = new Transaction("07/12/21", 7, "pagamento") 
myAccount.setTransactions(pagamento)

console.log(myAccount)

// EXERCÍCIO 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}