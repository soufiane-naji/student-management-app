const Student = require("../models/Student");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) return res.status(404).json({ message: "Student Not Found" });

    res.status(200).json({ student, message: "Student updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) return res.status(404).json({ message: "Student Not Found" });

    res.status(200).json({ student, message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student Not Found" });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
};
