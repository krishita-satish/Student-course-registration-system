import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";
import "./Results.css";

const Results = () => {
  const { registeredCourses } = useContext(CourseContext);

  return (
    <div className="rs-container">
      <div className="result-cont">
        <h2>Results</h2>
        <Link to ="/dashboard"> <button>back</button> </Link>
      </div>
      

      {registeredCourses.length === 0 ? (
        <p>No results available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map((c) => (
              <tr key={c.code}>
                <td>{c.name}</td>
                <td>A+</td>
                <td>Pass</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
