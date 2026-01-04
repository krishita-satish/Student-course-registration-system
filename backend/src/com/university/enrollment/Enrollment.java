package com.university.enrollment;

import com.university.students.Student;
import com.university.courses.Course;

import java.io.Serializable;

public class Enrollment implements Serializable {

    private Student student;
    private Course course;
    private Integer marks;     
    private String grade;

    public Enrollment(Student student, Course course) {
        this.student = student;
        this.course = course;
    }

    public Student getStudent() {
        return student;
    }

    public Course getCourse() {
        return course;
    }

    public Integer getMarks() {
        return marks;
    }

    public String getGrade() {
        return grade;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
