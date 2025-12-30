package com.university.students;

public class PostgraduateStudent extends Student {

    public PostgraduateStudent(String studentId, String name, int semester) {
        super(studentId, name, semester);
    }

    @Override
    public double calculateGPA() {
        return 0.0;
    }

    @Override
    public String getProgramType() {
        return "Postgraduate";
    }
}
