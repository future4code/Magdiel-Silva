import { app } from "./app";
import { getMyProfile } from "./endpoints/getMyProfile";
import { login } from "./endpoints/login";
import { singup } from "./endpoints/signup";

app.post("/user", singup)
app.post("/user/login", login)
app.get("/user/profile", getMyProfile)