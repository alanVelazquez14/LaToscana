import { Router } from "express";
import {
  byIdReservationsController,
  cancel,
  getReservations,
  getReservationsById,
  schedule,
} from "../controllers/reservationsController";
import { validateReservation } from "../middleware/validateReservation";

const reservationsRouter: Router = Router();

reservationsRouter.get("/", getReservations);
reservationsRouter.get("/:id", getReservationsById);
reservationsRouter.get("/user/:id", byIdReservationsController);

reservationsRouter.post("/schedule", validateReservation, schedule);

reservationsRouter.put("/cancel/:id", cancel);

export default reservationsRouter;
