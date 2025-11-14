const express = require("express");
const xlsx = require("xlsx");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// API: Read Excel and return JSON
app.get("/excel-data", (req, res) => {
  const filePath = path.join(__dirname, "data", "Book1.xlsx");

  // Read Excel File
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = xlsx.utils.sheet_to_json(worksheet);

  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
