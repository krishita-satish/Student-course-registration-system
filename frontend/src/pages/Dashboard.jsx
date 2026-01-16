import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome, Student</p>
      </header>

      <section className="dashboard-container">
        <div className="dashboard-card">
          <h3>Course Registration</h3>
          <p>Enroll in available courses.</p>
          <Link to="/dashboard/course-registration">
            <button>Register Courses</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>Enrolled Courses</h3>
          <p>View enrolled courses.</p>
          <Link to="/dashboard/enrolled-courses">
            <button>View Courses</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>Results</h3>
          <p>View grades.</p>
          <Link to="/dashboard/results">
            <button>View Results</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>GPA / CGPA</h3>
          <p>Check GPA.</p>
          <Link to="/dashboard/student-gpa">
            <button>View GPA</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
