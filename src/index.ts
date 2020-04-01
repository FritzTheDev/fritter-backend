import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";

import { App } from "./core/App";

const main = async () => {
  try {
    await createConnection(dbConfig);
  } catch (error) {
    console.log(`Error Connecting To Database: ${error}`);
  }

  const app = new App();
  app.listen();
}

main();