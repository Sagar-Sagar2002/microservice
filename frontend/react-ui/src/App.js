import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/students")
      .then((response) => {
        setStudents(response.data);
	console.log(students);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "20px", fontFamily: "Arial" }}>
      <h2>Students List</h2>
      {students.map((student) => (
        <div key={student.id}>{student.name}  -  {student.age}
          
 </div> 
   ))}
    </div>
  );
}

export default App;

