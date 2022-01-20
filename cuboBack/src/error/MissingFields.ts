import { BaseError } from "./BaseError"

export class MissingFiels extends BaseError{
    constructor(){
        super("Complete todos os campos")
    }
}