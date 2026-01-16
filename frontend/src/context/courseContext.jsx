import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerCourse = (course) => {
    setRegisteredCourses((prev) => {
      if (prev.find((c) => c.code === course.code)) return prev;
      return [...prev, course];
    });
  };

  return (
    <CourseContext.Provider value={{ registeredCourses, registerCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
