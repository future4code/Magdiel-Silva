import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController()

userRouter.post("/signup", userController.signUpController)
userRouter.get("", userController.getAllUsersController)