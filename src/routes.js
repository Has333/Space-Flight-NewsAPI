import { Router } from "express"
import { articleController } from "./controllers/articleController.js"

const routes = new Router();

routes.get("/articles", articleController.listAll);

routes.get("/articles/:id",articleController.listById);

routes.post("/articles", articleController.create);

routes.put("/articles/:id", articleController.updateById);

routes.delete("/articles/:id", articleController.deleteById)

export { routes };