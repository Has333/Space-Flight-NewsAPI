const express = require('express');
const MongoClient = require('mongodb').MongoClient
const routes = require('./routes.js');
require("dotenv").config();

const DB = process.env.DB;
const DBPASS = process.env.DBPASS;
const PORT = process.env.PORT || 3000;
const server = express();

const uri = `mongodb+srv://mongodbw:${DBPASS}@cluster0.xybv5.mongodb.net/${DB}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(() => {
  const collection = client.db("test").collection("devices");
  console.log(`Application connected to ${DB} Database`);
  client.close();
});

server.use(routes)

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


