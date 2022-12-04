require("dotenv").config();
const express = require("express");
const app = express();
require("./DB/conn");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Reply from /" });
});

module.exports = app;
