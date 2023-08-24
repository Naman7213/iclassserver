const express = require("express");
const router = express.Router();
const Admin = require("../model/adminSchema");
const Student = require("../model/studentSchema");

router.get("/", (req, res) => {
  Admin.find()
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Server error occured, sorry for the inconvineince" });
    });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const findAdmin = await Admin.findOne({ email: email });
    if (findAdmin) {
      if (findAdmin.password === password) {
        return res.status(200).json({ message: "Login Successful" });
      } else {
        return res.status(400).json({ message: "Please check your Details" });
      }
    } else {
      return res.status(401).json({ message: "Admin Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.patch("/markpresent", async (req, res) => {
  const regno = req.body.regno;
  const findStudent = await Student.findOne({ regno: regno });
  if (findStudent) {
    const updateStudent = {
      _id: findStudent._id,
      presentDays: ++findStudent.presentDays,
    };
    Student.findByIdAndUpdate(findStudent._id, updateStudent)
      .then((result) => {
        res
          .status(200)
          .json({ message: "Details Changed", updatedStudent: result });
      })
      .catch(() => {
        return res
          .status(500)
          .json({ message: "Server error, please try again" });
      });
  }
});

router.patch("/markabsent", async (req, res) => {
  const regno = req.body.regno;
  const findStudent = await Student.findOne({ regno: regno });
  if (findStudent) {
    const updateStudent = {
      _id: findStudent._id,
      absentDays: ++findStudent.absentDays,
    };
    Student.findByIdAndUpdate(findStudent._id, updateStudent)
      .then((result) => {
        res
          .status(200)
          .json({ message: "Details Changed", updatedStudent: result });
      })
      .catch(() => {
        return res
          .status(500)
          .json({ message: "Server error, please try again" });
      });
  }
});

module.exports = router;
