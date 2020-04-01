// Reflect-Metadata lets us use typeorm with typescript decorators.
// TODO: Learn how decorators work
import "reflect-metadata";
// dotenv loads environment variables into our app, so we don't hardcode them. Neat!
import "dotenv/config";
// typeorm's create connection function creates a connection to our DB.
import { createConnection } from "typeorm";
// App is a class that represents all the routers & middleware I've set up for the app.
// dbConfig tells typeORM where to look for the DB and entities, among other things.
import { App, dbConfig } from "./core";

// just a convenient function to run the startup login in.
const main = async () => {
  // if this throws then the app is worthless anyway
  await createConnection(dbConfig);

  // Creates a new app.
  const app = new App();

  // starts said app listening.
  app.listen();
};

// actually calls the "startup" function.
main();
