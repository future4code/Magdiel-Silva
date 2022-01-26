
export enum TOUR_DURATION {
   TIPO1 = 30,
   TIPO2 = 60

}
export interface UserInput {
    data_passeio: string,
    preco: number,
    duracao: TOUR_DURATION,
    latitude: number,
    longitude: number,
    pets: string[],
    horario_inicio: number,
    horario_termino: number
}


export interface UserInsert extends UserInput {
    id: string
}