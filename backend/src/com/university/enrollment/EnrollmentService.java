package com.university.enrollment;

import com.university.students.Student;
import com.university.courses.Course;
import com.university.exceptions.DuplicateEnrollmentException;

import java.util.ArrayList;
import java.util.List;

public class EnrollmentService {

    private List<Enrollment> enrollments = new ArrayList<>();

    public void enrollStudent(Student student, Course course)
            throws DuplicateEnrollmentException {

        for (Enrollment e : enrollments) {
            if (e.getStudent().getStudentId().equals(student.getStudentId())
                    && e.getCourse().getCourseCode().equals(course.getCourseCode())) {
                throw new DuplicateEnrollmentException(
                        "Student already enrolled in this course"
                );
            }
        }

        enrollments.add(new Enrollment(student, course));
    }

    public List<Enrollment> getEnrollments() {
        return enrollments;
    }
}
