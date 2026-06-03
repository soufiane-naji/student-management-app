const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
