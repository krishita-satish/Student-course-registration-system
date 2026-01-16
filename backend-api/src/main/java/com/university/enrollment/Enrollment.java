package com.university.enrollment;

import com.university.students.Student;
import com.university.courses.Course;

import java.io.Serializable;

public class Enrollment implements Serializable {

    private Student student;
    private Course course;
    private Integer marks;     
    private String grade;
    private int semester;

    public Enrollment(Student student, Course course, int semester) {
        this.student = student;
        this.course = course;
        this.semester = semester;
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

    public int getSemester() {
        return semester;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
