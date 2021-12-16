import { v4 } from "uuid" 

export default class IdGenerator{

    public generate = () =>{
        return v4()
    }
}
