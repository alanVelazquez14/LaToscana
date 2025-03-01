import { NextFunction, Request, Response } from "express";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  if (!name || !email || !birthdate || !nDni || !username || !password) {
    res.status(400).json({
      status: 400,
      message: "Todos los datos del usuario son requeridos",
    });
  }
  next();
};
