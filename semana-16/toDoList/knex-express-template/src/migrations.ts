import connection from "./connection";

const printError = (error:any) => {
    console.log(error.sqlMessage || error.message)
}

const createTables = () => connection.raw (`

    CREATE TABLE  ToDoListUser (
        id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
);

    CREATE TABLE ToDoListTask (
		id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES ToDoListUser(id)
);

    CREATE TABLE ToDoListResponsibleUserTaskRelation (
        task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        PRIMARY KEY (task_id, responsible_user_id),
        FOREIGN KEY (task_id) REFERENCES ToDoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES ToDoListUser(id)
);  

`)
.then(()=>{
    console.log("Tabelas criadas com sucesso!")
})
.catch(printError)
createTables()