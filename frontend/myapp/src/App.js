import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.49.2:30080/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

