import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";
import "./EnrolledCrs.css";

const EnrolledCourses = () => {
  const { registeredCourses } = useContext(CourseContext);

  return (
    <div className="ec-container">
      <div className="container">
        <h2>Enrolled Courses</h2>
        <Link to ="/dashboard"> <button>back</button> </Link>
      </div>
      

      {registeredCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul>
          {registeredCourses.map((c) => (
            <li key={c.code}>
              {c.name} ({c.code}) - {c.credits} Credits
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrolledCourses;
