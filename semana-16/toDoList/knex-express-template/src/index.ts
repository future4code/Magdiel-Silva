import { createUser } from "./endpoints/createUser"
import {getUserById} from "./endpoints/getUserById"
import { editUser } from "./endpoints/editUser";
import { createTask } from "./endpoints/createTask";
import app from "./app"
import { getTaskById } from "./endpoints/getTaskById";



// endpoint para criar usuário

app.put("/user", createUser);

// endpoint para buscar o usuário pelo id. Body de resposta é o ID e o nickname

app.get("/user/:id", getUserById);

// endpoint para editar o usuário

app.post("/user/edit/:id", editUser);




// endpoint para criar tarefa

app.put("/task", createTask);

// endpoint para pegar tarefa por ID

app.get("/task/:id", getTaskById);