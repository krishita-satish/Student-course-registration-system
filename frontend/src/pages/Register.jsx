import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.studentId ||
    !formData.name ||
    !formData.email ||
    !formData.password
  ) {
    alert("All fields are required");
    return;
  }

  const existingUsers =
    JSON.parse(localStorage.getItem("students")) || [];

  const alreadyRegistered = existingUsers.find(
    (student) => student.studentId === formData.studentId
  );

  if (alreadyRegistered) {
    alert("Student ID already registered");
    return;
  }

  existingUsers.push(formData);
  localStorage.setItem("students", JSON.stringify(existingUsers));

  alert("Registration Successful!");
};


  return (
    <div className="register-page">
      <header className="app-header">
        Student Course Registration & Result Management System
      </header>

      <div className="register-container">
        <h2>Student Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Link to="/"><h5>Login here!</h5></Link>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
