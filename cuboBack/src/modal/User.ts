export interface UserInput{
    firstName: string,
    lastName: string,
    participation: number
}
export interface UserInsert extends UserInput{
    id: string
}