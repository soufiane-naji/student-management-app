const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
    filiere: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const student = mongoose.model("Student", studentSchema);

module.exports = student;
