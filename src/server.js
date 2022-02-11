import express from "express";
import mongoose from "mongoose";
import router from "./routes.js";
import "dotenv/config.js";

const server = express();
const DB = process.env.DB;
const DBPASSWORD = process.env.DBPASSWORD;
const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://mongodbw:${DBPASSWORD}@cluster0.xybv5.mongodb.net/${DB}?retryWrites=true&w=majority`,
    {useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => console.log(`Application connected to ${DB} database`))
    .catch((err) => console.log(err));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(router);
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
