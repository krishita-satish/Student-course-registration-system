import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";
import "./Gpa.css";

const GPA = () => {
  const { registeredCourses } = useContext(CourseContext);

  const totalCredits = registeredCourses.reduce(
    (sum, c) => sum + c.credits,
    0
  );

  const gpa = registeredCourses.length === 0 ? 0 : 9.0;

  return (
    <div className="gpa-container">
      <div className="gpa">
        <h2>GPA / CGPA</h2>
        <Link to ="/dashboard"> <button>back</button> </Link>
      </div>
      

      <p>Total Credits: {totalCredits}</p>
      <p>Semester GPA: {gpa}</p>
      <p>Overall CGPA: {gpa}</p>
    </div>
  );
};

export default GPA;
