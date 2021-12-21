import { app } from "./app";
import { singup } from "./endpoints/signup";

app.post("/user", singup)