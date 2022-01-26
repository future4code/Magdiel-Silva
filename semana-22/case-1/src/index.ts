import { app } from "./controller/App";
import { userRouter } from "./routes/userRouter";

app.use("/user", userRouter)