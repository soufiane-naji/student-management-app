const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb Connected"))
  .catch(() => console.log("Mongodb Not Connected"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
