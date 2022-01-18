import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/idGenerator"

console.log("Hello from TS!")
const id = new IdGenerator().generate()
console.log({id})

const hashPass = new HashManager().createHash("alice123")

console.log({id, hashPass})
