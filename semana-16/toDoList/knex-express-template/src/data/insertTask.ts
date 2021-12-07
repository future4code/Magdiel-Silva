import connection from "../connection";

export const insertTask = async (
    id: string,
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: string

): Promise<any> => {

    await connection("ToDoListTask")
    .insert({
        id,
        title,
        description,
        limit_date,
        creator_user_id
    })

}