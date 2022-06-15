const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

/** Cors */
app.use(cors());

/** Body Parse */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Routers */
app.use("/test", (req, res, next) => {
  res.send(`<h1>Connected to server</h1>`);
});

module.exports = app;