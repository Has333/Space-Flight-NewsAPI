//import { App } from "./app.js";
import express from 'express';
import { MongoDB } from "./common/databases/mongodb.js";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const server = express();

MongoDB.init()

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
