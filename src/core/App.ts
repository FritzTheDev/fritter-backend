import { default as express, json as jsonParser } from "express";

// This "App" class sets us the express middleware and routes,
// and also includes a "listen" function to start the server.
export class App {
  // declaring the "app" property type
  app: express.Application;

  constructor() {
    // works off the express default property to keep typescript happy.
    this.app = express();

    // takes all the non-error-handling middleware and sets it up.
    // TODO: Explore whether error middleware needs to be separate.
    this.initializeMiddleware();
  }

  listen() {
    // starts the app listening and logs that + the port to STDOUT
    this.app.listen(process.env.PORT, () => {
      console.info(`Running on ${process.env.PORT}`);
    });
  }

  initializeMiddleware() {
    // Using the express.json middleware here because why bother with bodyparser?
    this.app.use(jsonParser());
  }
}