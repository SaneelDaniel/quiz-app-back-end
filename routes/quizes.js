const express = require("express");
const router = express.Router();
var MongoClient = require("mongodb").MongoClient;

const fs = require("fs");

let rawdata = fs.readFileSync(process.cwd() + "/routes/" + "config.json");
let config = JSON.parse(rawdata);


const dbName = config.DB_NAME;

router.get("/QuizCollection", async (req, res) => {
  try {
    MongoClient.connect(
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error, client) => {
        if (error) {
          console.log(error);
        }
        database = client.db(process.env.DB_NAME);
        var cursor = database
          .collection("quizCollection")
          .find({})
          .toArray((error, result) => {
            if (error) {
              console.log("error .....", error);
            }
            var resultCollection = [];
            result.forEach(function (err, data) {
              resultCollection.push(data);
            });
            console.log(resultCollection);
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(result);
          });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
