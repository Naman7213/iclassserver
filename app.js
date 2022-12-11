require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/conn");
const studentRoutes = require("./Routes/studentRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "You are requestion / route" });
});

app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
