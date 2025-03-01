import { CredentialModel } from "../config/data-source";
import CreateCredentialDto from "../dto/CreateCredentialDto";
import { Credential } from "../entities/Credential";

export const createCredentialServices = async ({
  username,
  password,
}: CreateCredentialDto) => {
  const newCredential: Credential = await CredentialModel.create({
    username,
    password,
  });

  await CredentialModel.save(newCredential);
  return newCredential;
};

export const validateCredentialsServices = async ({
  username,
  password,
}: CreateCredentialDto) => {
  const userCredentials = await CredentialModel.findOneBy({
    username,
  });

  if (!userCredentials) {
    throw Error("Usuario incorrecto");
  }

  if (userCredentials?.password !== password) {
    throw Error("Credenciales incorrectas");
  }

  return userCredentials;
};
