import { Request, Response } from "express";
import {
  createUserServices,
  findUserByCredentialId,
  getUserByIdServices,
  getUserServices,
} from "../services/usersService";
import { User } from "../entities/User";
import { validateCredentialsServices } from "../services/credentialsService";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUserServices();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al obtener la lista de usuarios",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdServices(Number(id));
    res.status(201).json(user);
  } catch (e) {
    res.status(404).json({
      message: `Ha ocurrido un error al obtener el usuario`,
      error: (e as Error)?.message,
    });
  }
};

export const userRegister = async (req: Request, res: Response) => {
  try {
    const newUser: User = await createUserServices(req.body);
    res.status(201).json({
      status: 201,
      message: "Usuario creado con exito",
    });
  } catch (error) {
    res.status(400);
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const credentialsId = await validateCredentialsServices({
      username,
      password,
    });

    const user = await findUserByCredentialId(credentialsId.id);

    res.status(200).json({
      login: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      login: false,
      message: "Ha ocurrido un error al loguear el usuario",
    });
  }
};
