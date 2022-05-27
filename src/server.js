import express from 'express';
import { routes } from './routes.js';
import { MongoDB } from "./common/databases/mongodb.js";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const server = express();

MongoDB.init();

server.use(routes);
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
