import connection from "../connection";

export const insertUser = async (
    id: string,
    name: string,
    nickname: string,
    email:string
) => {

    await connection
    .insert({
        id,
        name,
        nickname,
        email
    })
    .into("ToDoListUser")

}
