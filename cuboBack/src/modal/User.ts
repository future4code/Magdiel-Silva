export class User{
    constructor(
        private id: string,
        private firstName:string,
        private lastName: string,
        private participation: string
    ){}


}

export interface UserInput{
    firstName: string,
    lastName: string,
    participation: number
}
export interface UserInsert extends UserInput{
    id: string
}