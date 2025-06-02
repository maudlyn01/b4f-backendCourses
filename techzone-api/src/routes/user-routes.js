import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  
} from "../controllers/user-controllers.js";

export const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUser);
userRoute.post("/", createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);