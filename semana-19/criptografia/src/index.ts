import { UserDataBase } from "./data/userDataBase"
import IdGenerator from "./services/IdGenerator"



console.log(new IdGenerator().generate())
console.log(new IdGenerator().generate())
console.log(new IdGenerator().generate())

//query getuserId


new UserDataBase()
.getUserById("")
.then((res)=>{
console.log(res)
})
.catch((res)=>{
    console.log(res)
})