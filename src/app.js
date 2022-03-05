import express from "express";
import { routes } from "./routes.js";

class App {
  constructor() {
    this.server = express()
    this.routes()
    this.middlewares()
  }

  routes(){
    this.server.use(routes)
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }
}

export default new App().server

