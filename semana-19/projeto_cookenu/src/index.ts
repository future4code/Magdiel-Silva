import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipes";
import { followUser } from "./endpoints/followUser";
import { getMyProfile } from "./endpoints/getMyProfile";
import { getOtherProfile } from "./endpoints/getOtherProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";
import { singup } from "./endpoints/signup";

app.post("/user", singup)
app.post("/user/login", login)
app.get("/user/profile", getMyProfile)
app.get("/user/:id",getOtherProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)
app.post("/user/follow", followUser)