const express = require("express");
const fs = require("fs");
const app = express();

const connectDB = require("./db/Connection");

let rawdata = fs.readFileSync(process.cwd() + "/routes/" + "config.json");
let config = JSON.parse(rawdata);

//connectDB();
app.use(express.json({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
//routes
const quizRoute = require("./routes/quizes");
app.use("/quizes", quizRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server running at port:", PORT));
