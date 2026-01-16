import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";
import "./CourseReg.css";

const courses = [
  { code: "CS101", name: "Data Structures", credits: 4 },
  { code: "CS102", name: "Database Systems", credits: 3 },
  { code: "CS201", name: "Operating Systems", credits: 4 },
  { code: "CS202", name: "Computer Networks", credits: 3 },
  { code: "CS301", name: "Machine Learning", credits: 3 }
];

const CourseRegistration = () => {
  const { registerCourse } = useContext(CourseContext);

  return (
    <div className="cr-container">
      <div className="cr-header">
        <h2>Course Registration</h2>

        <Link to ="/dashboard"><button>back</button></Link>
      </div>
      

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Course</th>
            <th>Credits</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.code}>
              <td>{c.code}</td>
              <td>{c.name}</td>
              <td>{c.credits}</td>
              <td>
                <button onClick={() => registerCourse(c)}>Register</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseRegistration;
