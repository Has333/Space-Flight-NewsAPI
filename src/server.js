import { UpsertArticlesToDatabaseAutomation } from './jobs/cron.js';
import { MongoDB } from "./common/databases/mongodb.js";
import { routes } from './routes.js';
import express from 'express';
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const server = express();

MongoDB.init();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

UpsertArticlesToDatabaseAutomation();

server.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`)
});



