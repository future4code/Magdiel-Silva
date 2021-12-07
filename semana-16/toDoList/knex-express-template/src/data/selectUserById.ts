import connection from "../connection";

export const selectUserById = async (id: string): Promise <any> =>{
    const result = await connection("ToDoListUser")
    .select("*")
    .where({id:id})

    return result[0]
}
