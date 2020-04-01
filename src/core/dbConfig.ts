import { ConnectionOptions } from "typeorm";
/*
 * bBConfig takes environment variables loaded by DotEnv and plugs them
 * into a config object for createConnection() to use.
 * It also sets the DB type & tells typeorm where to find entities.
 */
export const dbConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: process.env.POSTGRES_SYNC === "1"
};
