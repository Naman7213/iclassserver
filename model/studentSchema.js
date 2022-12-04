const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  age: mongoose.Schema.Types.String,
});

const Student = mongoose.model("Students", student_schema);
module.exports = Student;
