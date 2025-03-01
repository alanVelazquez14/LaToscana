import { NextFunction, Request, Response } from "express";

export const validateReservation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time, userId } = req.body;

  if (!date || !time || !userId) {
    res.status(400).json({
      status: 400,
      message: "Todos los datos de la reserva son requeridos",
    });
    return;
  }

  next();
};
