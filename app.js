require("dotenv").config();
const express = require("express");
const app = express();
require("./DB/conn");
const Admin = require("./model/adminSchema");

app.get("/", async (req, res) => {
  try {
    Admin.find()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  } catch {
    res.status(200).json({ message: "error" });
  }
});

module.exports = app;
