import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(){
        super("Complete todos os campos!")
    }
}