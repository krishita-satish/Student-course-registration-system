package com.university.students;

public class UndergraduateStudent extends Student {

    public UndergraduateStudent(String studentId, String name, int semester) {
        super(studentId, name, semester);
    }

    @Override
    public double calculateGPA() {
        return 0.0;
    }

    @Override
    public String getProgramType() {
        return "Undergraduate";
    }
}
