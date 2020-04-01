import { default as express, json as jsonParser } from "express";

export class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddleware();
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Running on ${process.env.PORT}`);
    });
  }

  initializeMiddleware() {
    this.app.use(jsonParser());
  }
}