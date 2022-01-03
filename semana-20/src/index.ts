import { app } from "./app"
import { UserController } from "./controllers/UserController"

const userController = new UserController().signUpController

app.post("/user/signup", userController)