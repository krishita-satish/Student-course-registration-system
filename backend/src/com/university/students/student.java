package com.university.students;

import java.io.Serializable;

public abstract class Student implements Serializable {

    protected String studentId;
    protected String name;
    protected int semester;

    public Student(String studentId, String name, int semester) {
        this.studentId = studentId;
        this.name = name;
        this.semester = semester;
    }

    public abstract double calculateGPA();

    public abstract String getProgramType();

    public String getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
