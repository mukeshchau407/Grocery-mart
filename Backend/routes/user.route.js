import express from "express";
import {
  isAuth,
  login,
  register,
  logout,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/isAuth", authUser, isAuth);
userRouter.post("/logout", logout);

export default userRouter;
