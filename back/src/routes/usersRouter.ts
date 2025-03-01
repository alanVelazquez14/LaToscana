import { Router } from "express";
import {
  getUser,
  getUserById,
  userLogin,
  userRegister,
} from "../controllers/usersControllers";
import { validateUser } from "../middleware/validateUser";

const usersRouter: Router = Router();

usersRouter.get("/", getUser);
usersRouter.get("/:id", getUserById);

usersRouter.post("/register", validateUser, userRegister);
usersRouter.post("/login", userLogin);

export default usersRouter;
