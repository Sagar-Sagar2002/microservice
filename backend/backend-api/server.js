const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Sagar", age: 23 },
  { id: 2, name: "Arun", age: 25 },
  { id: 3, name: "Kumar", age: 22 },
];

// GET all
app.get("/students", (req, res) => {
  res.json(students);
});

// POST create
app.post("/students", (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

// PUT update
app.put("/students/:id", (req, res) => {
  students = students.map((s) =>
    s.id == req.params.id ? { ...s, ...req.body } : s
  );
  res.json({ message: "Updated" });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  students = students.filter((s) => s.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(30080, () => console.log("Backend running on port 30080"));
