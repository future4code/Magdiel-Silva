import connection from "../connection";

export const updateUser = async (
    id:string, 
    name?: string,
    nickname?:string,
    email?:string
) :Promise <any> => {
    
    if (name){
        await connection.raw(`
            UPDATE ToDoListUser
            SET name = '${name}'
            WHERE id = '${id}';    
        `)
    }
    if (nickname){
        await connection.raw(`
            UPDATE ToDoListUser
            SET nickname = '${nickname}'
            WHERE id = '${id}';    
        `)
    }
    if (email){
        await connection.raw(`
            UPDATE ToDoListUser
            SET email = '${email}'
            WHERE id = '${id}';    
        `)
    }
}