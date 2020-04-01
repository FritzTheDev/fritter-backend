import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";

import { App, dbConfig } from "./core";

const main = async () => {
  // if this throws then the app is worthless anyway
  await createConnection(dbConfig);

  const app = new App();
  app.listen();
}

main();