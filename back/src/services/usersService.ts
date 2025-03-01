import CreateUserDto from "../dto/CreateUserDto";
import { ReservationModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { createCredentialServices } from "./credentialsService";

export const getUserServices = async (): Promise<User[]> => {
  const users: User[] = await UserModel.find();
  return users;
};

export const getUserByIdServices = async (id: number): Promise<User | null> => {
  const user: User | null = await UserModel.findOne({
    where: { id },
    relations: { reservations: true },
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  return user;
};

export const createUserServices = async ({
  username,
  password,
  ...createUserDto
}: CreateUserDto) => {
  const newUser: User = await UserModel.create(createUserDto);

  const newCredential: Credential = await createCredentialServices({
    username,
    password,
  });
  newUser.credential = newCredential;
  const result = await UserModel.save(newUser);
  return result;
};

export const findUserByCredentialId = async (
  credentialId: number
): Promise<User | null> => {
  const user: User | null = await UserModel.findOneBy({
    credential: { id: credentialId },
  });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

export const loginUserServices = async () => {};
