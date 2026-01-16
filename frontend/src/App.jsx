import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseRegistration from "./pages/CourseReg";
import EnrolledCourses from "./pages/EnrolledCrs";
import Results from "./pages/Results";
import GPA from "./pages/Gpa";
import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
      <CourseProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/course-registration"
            element={<CourseRegistration />}
          />
          <Route
            path="/dashboard/enrolled-courses"
            element={<EnrolledCourses />}
          />
          <Route path="/dashboard/results" element={<Results />} />
          <Route path="/dashboard/student-gpa" element={<GPA />} />
        </Routes>
      </CourseProvider>

  );
}

export default App;
