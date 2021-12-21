import { app } from "./app";
import { login } from "./endpoints/login";
import { singup } from "./endpoints/signup";

app.post("/user", singup)
app.post("/user/login", login)