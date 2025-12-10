const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory data (no database)
let students = [
  { id: 1, name: "Sagar", age: 23 },
  { id: 2, name: "Arun", age: 25 },
  { id: 3, name: "Kumar", age: 22 }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST add student
app.post("/students", (req, res) => {
  const { name, age } = req.body;
  const newStudent = {
    id: Date.now(),
    name,
    age: Number(age),
  };
  students.push(newStudent);
  res.json(newStudent);
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  students = students.map((s) =>
    s.id == id ? { ...s, name, age: Number(age) } : s
  );

  res.json({ message: "Updated successfully" });
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  students = students.filter((s) => s.id != id);
  res.json({ message: "Deleted successfully" });
});

// Start server
app.listen(30080, () => {
  console.log("Backend running on port 30080 (No SQL)");
});
