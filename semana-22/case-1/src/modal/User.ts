export class User {
    constructor(
        private id:string,
        private name: string,
        private email:string,
        private data_passeio: string,
        private duracao:TOUR_DURATION,
        private latitude: number,
        private longitude: number,
        private horario_inicio: number,
        private horario_termino:number
    ){}

    static userModal (user:User) {
        return new User(
            user.id,
            user.name,
            user.email,
            user.data_passeio,
            user.duracao,
            user.latitude,
            user.longitude,
            user.horario_inicio,
            user.horario_termino
        )
    }

}
export enum TOUR_DURATION {
   TIPO1 = 30,
   TIPO2 = 60

}
export interface UserInput {
    name: string,
    email: string,
    data_passeio: string,
    duracao:TOUR_DURATION,
    latitude: number,
    longitude: number,
    horario_inicio: number,
    horario_termino: number
}


export interface UserInsert extends UserInput {
    id: string
}
