package com.university.api.controller;

import com.university.students.*;
import com.university.enrollment.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import com.university.courses.Course;
import com.university.exceptions.DuplicateEnrollmentException;

import com.university.grading.GradeService;
import com.university.exceptions.InvalidGradeException;
import com.university.enrollment.Enrollment;


@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "*")
public class StudentController {

    private EnrollmentService enrollmentService = new EnrollmentService();

    @GetMapping("/{id}/gpa")
    public double getGPA(@PathVariable String id) {

        Student student = new UndergraduateStudent(id, "Demo", 3, enrollmentService.getEnrollments());

        return student.calculateGPA();
    }

        
    @PostMapping("/enroll")
    public String enrollStudent(
            @RequestParam String studentId,
            @RequestParam String courseCode,
            @RequestParam String courseName,
            @RequestParam int credits,
            @RequestParam int semester) {

        try {
            Student student = new UndergraduateStudent(studentId, "Demo Student", semester, enrollmentService.getEnrollments());

            Course course = new Course(courseCode, courseName, credits);

            enrollmentService.enrollStudent(student, course, semester);

            return "Enrollment successful";

        } catch (DuplicateEnrollmentException e) {
            return e.getMessage();
        }
    }

    private GradeService gradeService = new GradeService();

    @PostMapping("/grade")
    public String assignGrade(
            @RequestParam String studentId,
            @RequestParam String courseCode,
            @RequestParam int marks) {

        try {
            for (Enrollment e : enrollmentService.getEnrollments()) {

                if (e.getStudent().getStudentId().equals(studentId) && e.getCourse().getCourseCode().equals(courseCode)) {

                    gradeService.assignMarks(e, marks);
                    return "Grade assigned";
                }
            }

            return "Enrollment not found";

        } catch (InvalidGradeException e) {
            return e.getMessage();
        }
    }

    @GetMapping("/{id}/cgpa")
    public double getCGPA(@PathVariable String id) {

        Student student = new UndergraduateStudent(id,"Demo Student",3,enrollmentService.getEnrollments());

        return student.calculateGPA();
    }
}

