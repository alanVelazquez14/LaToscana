import usersRouter from "./usersRouter";
import reservationsRouter from "./reservationsRouter";
import { Router } from "express";

const indexRouter: Router = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/reservations", reservationsRouter);

export default indexRouter;
