
export enum TOUR_DURATION {
   TIPO1 = 30,
   TIPO2 = 60

}
export interface UserInput {
    name: string,
    email: string,
    data_passeio: string,
    latitude: number,
    longitude: number,
    horario_inicio: number,
    horario_termino: number
}


export interface UserInsert extends UserInput {
    id: string
}
