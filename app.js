const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
require("dotenv/config");

// Import Route Management
const userRoute = require("./routes/user");

// Middleware
//app.use(bodyParser.json()); // handles POST JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }, // to avoid getting depericated warnings.
  () => console.log("Connected to DB")
);

// Start Listening to the Server
app.listen(3000);
// START: $ npm start
// STOP: key control-c
