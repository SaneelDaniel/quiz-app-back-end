const mongoose = require("mongoose");
require("dotenv/config");
var MongoClient = require("mongodb").MongoClient;

const fs = require("fs");

let rawdata = fs.readFileSync(process.cwd() + "/routes/" + "config.json");
let config = JSON.parse(rawdata);

const databaseName = config.DB_NAME;
const URI = config.DB_CONNECTION;
var database;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectDB = () =>
  MongoClient.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        console.log(error);
      }
      database = client.db(databaseName);
      console.log("Database connection successful", databaseName);

      console.log(database.collection("quizCollection"));
    }
  );

module.exports = database;
module.exports = connectDB;
