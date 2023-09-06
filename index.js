const express = require("express");

//require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//const Router = require("Router");

//const dbUrl = process.env.DB_URL;
const dbUrl = "mongodb://0.0.0.0:27017";

// const dbUrl = "mongodb://localhost:27017";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection;

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const urlRouter = require("./routes/url");

app.use("/url", urlRouter);

//const PORT = process.env.PORT;
const PORT = 6000;
app.listen(PORT, () => {
  console.log("The node application is running on :" + PORT);
});
