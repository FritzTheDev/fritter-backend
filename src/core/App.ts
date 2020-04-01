import { default as express, json as jsonParser } from "express";

/*
 * This "App" class sets us the express middleware and routes,
 * and also includes a "listen" function to start the server.
 */
export class App {
  // declaring the "app" property type
  app: express.Application;

  constructor() {
    // uses the express default property to keep typescript happy.
    this.app = express();

    // TODO: Explore whether error middleware needs to be separate.
    this.initializeMiddleware();
  }

  /*
   * Starts app listening for requests. Called from /index.ts
   */
  listen() {
    this.app.listen(process.env.PORT, () => {
      console.info(`Running on ${process.env.PORT}`);
    });
  }

  /*
   * Initializes the middleware that doesn't involve error handling.
   */
  initializeMiddleware() {
    // Using the express.json middleware here because why bother with bodyparser?
    this.app.use(jsonParser());
  }
}
