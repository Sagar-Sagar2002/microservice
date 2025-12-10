// src/pages/Students.js

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar"; // Sidebar import

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Sagar", age: 23 },
    { id: 2, name: "Arun", age: 25 },
    { id: 3, name: "Kumar", age: 22 },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toastSuccess = (msg) => {
    Swal.fire({
      icon: "success",
      title: msg,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const toastDelete = () => {
    Swal.fire({
      icon: "warning",
      title: "Student deleted",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: Date.now(), name, age: Number(age) };
    setStudents([newStudent, ...students]);
    setName("");
    setAge("");
    toastSuccess("Student Added");
  };

  const openEditModal = (student) => {
    setEditId(student.id);
    setName(student.name);
    setAge(student.age);
    setShowModal(true);
  };

  const handleUpdate = () => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === editId ? { ...s, name, age: Number(age) } : s
      )
    );
    setShowModal(false);
    setEditId(null);
    setName("");
    setAge("");
    toastSuccess("Student Updated");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This can't be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0d6efd",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
        toastDelete();
      }
    });
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "260px", width: "100%" }} className={darkMode ? "dark-bg" : ""}>
        <div className="container mt-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>🎓 Students Management</h2>
            <button className="btn btn-dark" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Search */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="🔍 Search student"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Table */}
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => openEditModal(student)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No students found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Add Form */}
          <h4>Add Student</h4>
          <form onSubmit={handleSubmit} className="d-flex gap-3 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>

        {/* Edit Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleUpdate}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Students;
