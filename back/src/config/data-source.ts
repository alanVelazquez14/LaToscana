import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Reservation } from "../entities/Reservation";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: DB_PORT || 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Credential, Reservation],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const ReservationModel = AppDataSource.getRepository(Reservation)