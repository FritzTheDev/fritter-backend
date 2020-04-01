import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";

import { App, dbConfig } from "./core";

// just a convenient function to run the startup login in.
const main = async () => {
  // if this throws then the app is worthless anyway
  await createConnection(dbConfig);

  // Creates a new app.
  const app = new App();

  // starts said app listening.
  app.listen();
}

// actually calls the "startup" function.
main();