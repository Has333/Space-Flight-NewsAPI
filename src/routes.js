import { Router } from "express";
import { Articles } from "./controllers/articleController.js";

const routes = new Router();

routes.get("/articles", Articles.listAll);

routes.get("/articles/:id",Articles.listById);

routes.post("/articles", Articles.create);

routes.put("/articles/:id", Articles.updateById);

routes.delete("/articles/:id", Articles.deleteById)

export { routes };