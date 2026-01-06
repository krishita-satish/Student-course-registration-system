import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const registeredStudents =
    JSON.parse(localStorage.getItem("students")) || [];

  const validUser = registeredStudents.find(
    (student) =>
      student.studentId === studentId &&
      student.password === password
  );

  if (validUser) {
    navigate("/dashboard");
  } else {
    setError("Invalid Student ID or Password");
  }
};


  return (
    <>
      <header className="main-header">
        <h1>Student Course Registration & Result Management System</h1>
      </header>

      <div className="login-section">
        <div className="login-box">
          <h2>Student Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}
            <Link to ="/register"><h5>register here!</h5></Link>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
